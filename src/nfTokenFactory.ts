import TruffleContract from 'truffle-contract'
import Web3 from 'web3'
import NFTokenABI from './contracts/NFToken.json'

const nfTokenContract = TruffleContract(NFTokenABI)

export default function (web3: Web3) {
  nfTokenContract.setProvider(web3.currentProvider)
  nfTokenContract.web3.eth.defaultAccount = web3.eth.accounts[0]

  return nfTokenContract.deployed()
}
