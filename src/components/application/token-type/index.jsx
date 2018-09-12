import React, {
  Component
} from 'react'

import style from './style.scss'

export default class TokenType extends Component {
  render () {
    return (
      <div
        onClick={this.props.onClick}>
        <img src={this.props.url} className='token-type__img' />
      </div>
    )
  }
}
