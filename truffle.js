require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider')

const mnemonic = process.env.HDWALLET_MNEMONIC

module.exports = {
  networks: {
    ropsten: {
      provider: new HDWalletProvider(mnemonic, process.env.ROPSTEN_PROVIDER_URL),
      network_id: 3,
      gas: 4612388,
      gasPrice: 100000000000,
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, process.env.RINKEBY_PROVIDER_URL),
      network_id: 4,
      gas: 4912388,
      gasPrice: 100000000000,
    },
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // Match any network id
    }
  }
}
