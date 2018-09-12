import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { toastr } from 'react-redux-toastr'

import classnames from 'classnames'
import range from 'lodash.range'

import nfToken from '../../../nfTokenFactory'

import { addTokenAction } from '../../../redux/actions'

import Ether from '../../ether'
import TokenType from '../token-type'

import nfTokenTypeImageUrl from '../../../services/get-etherscan-url-service'

import style from './style.scss'

const MyCustomComponent = class extends Component {

  render() {
    return (
      <span>
        {this.props.children}
      </span>
    )
  }

}


// tslint:disable-next-line:max-classes-per-file
const CustomizeToken = class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      price: '',
      tokenType: 0,
      // tslint:disable-next-line:object-literal-sort-keys
      title: '',
      titleError: '',
      errorMessage: '',
      redirectToTokenList: false
    }
  }

  async componentDidMount() {
    try {
      const contractInstance = await nfToken(window.web3);
      const price = await contractInstance.getCurrentPrice();

      this.setState({ price: price.toString() })
    } catch(error) {
      toastr.error('Error', error.message)
    }
  }

  async onClickSave () {
    // Reset the error handling
    this.setState({ titleError: '' })

    // TODO: Replace these magic numbers with an app-wide config:
    if (this.state.title.length < 1) {
      this.setState({ titleError: 'Please enter at least 1 character for the title' })
    } else {
      try {
        const contractInstance = await nfToken(window.web3);

        const txHash = await contractInstance.buyToken.sendTransaction(
          this.state.tokenType,
          this.state.title,
          { value: this.state.price }
        )

        this.props.addToken({ transactionHash: txHash })
        this.setState({ redirectToTokenList: true })
        toastr.success('Success', 'The transaction has been broadcast.')
      } catch(err) {
        toastr.error('Error', 'The transaction was cancelled or rejected.')
      }
    }
  }

  onClickTokenType (index) {
    this.setState({ tokenType: index })
  }

  render () {
    let titleError
    let errorMessage
    if (this.state.redirectToTokenList) {
      return <Redirect to={'/tokens/all'} />
    }

    if (this.state.titleError) {
      titleError =
        <p className="help is-danger">{this.state.titleError}</p>
    }

    if (this.state.errorMessage) {
      errorMessage = <p className="help is-danger">{this.state.errorMessage}</p>
    }

    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-half-desktop">

              <div className="etherplate-form">
                <div className="etherplate-form--wrapper">
                  <div className="columns is-mobile">
                    {range(2).map(index => {
                      const selected = this.state.tokenType === index
                      return (
                        <div key={index} className="column rotate-in-center is-one-fifth-mobile is-one-fifth-tablet is-one-fifth-desktop">
                          <TokenType
                            url={nfTokenTypeImageUrl(index, 'small')}
                            onClick={() => this.onClickTokenType(index)}
                            selected={selected} />
                        </div>
                      )
                    })}
                  </div>

                  <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                      <Ether wei={this.state.price} />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                      <input
                        placeholder={`Name your ${this.state.tokenType === 0 ? 'sword' : 'shield'}`}
                        className="input"
                        value={this.state.title}
                        onChange={(e) => this.setState({ title: e.target.value })} />
                    </div>
                    {titleError}
                  </div>

                  <br />
                  <p>
                    <button
                      disabled={this.state.selectedToken === null}
                      className={classnames('button is-success is-medium')}
                      onClick={(e) => this.onClickSave()}>
                      Buy Token
                    </button>
                  </p>
                  {errorMessage}
                </div>
              </div>
            </div>

            <div className="column is-one-third">
              <figure className="image is-square">
                <img src={nfTokenTypeImageUrl(this.state.tokenType)} />
              </figure>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToken: (token) => {
      dispatch(addTokenAction(token))
    }
  }
}

export default connect(null, mapDispatchToProps)(CustomizeToken)
