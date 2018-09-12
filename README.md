# Ethereum-tart

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

### What is this?

This is an boilerpate project showing how you can hook up your Ethereum Non-Fungible Tokens (NFTs, ERC721, similar to CryptoKitties) contract in a DApp.

Etherplate uses OpenZeppelin's fantastic community-audited contracts as a base to implement the ERC721 standard.

This is forked from [chuckbergeron/etherplate](https://github.com/chuckbergeron/etherplate) that is awesome project

# Setup

### Requires NPM

Homebrew on Mac OSX:

`brew install node npm`

Apt on Linux:

`apt-get install node npm`

### Install truffle globally:

`npm install truffle -g`

### Install the local NPM packages:

`npm install`

### Environment Variables

1. `cp .env.example .env`

2. Enter your own twelve random words in the .envrc.

3. Also, we'll leverage Infura's Ethereum Ropsten testnet node, so make sure to set up an account and paste your private key in your `.env`

### Ganache (CLI)

Create a directory for ganache-cli to store it's database in:

`mkdir .ganache`

### Compile the Solidity code

`npm run truffle:compile`

### Migrate the Contracts

This will deploy the contract to the network (tip: use --network=ropsten to deploy to Ethereum's Ropsten Testnet)

`npm run truffle:migrate`

# Run the Project

Make sure the truffle contracts are compiled and migrated.

In one terminal window, run the ganache-cli (local Ethereum RPC test node) with:

`./ganache.sh`

Once Ganache is running, in another terminal start the Webpack dev server.

`npm run start`

Your server should now be running at http://127.0.0.1:8080

### truffle.js & truffle-config.js

Why is there both a truffle and truffle-config file?

* On Windows, truffle-config.js is required. You can safely delete the one you don't need (ie on Mac/Linux you can delete truffle-config.js)

# Building the Project

`npm run build`

*Note: Currently we are manually migrating contracts against the Ropsten & Rinkeby testnets, and checking the build into the repo. This is less than ideal. It would be better to use a build script such as the [netlify-build.sh](https://github.com/chuckbergeron/etherplate/blob/master/netlify-build.sh) file and compile contracts on the server.*

# Running the Tests

To run the DApp test suite (React components, etc):

`npm test`
