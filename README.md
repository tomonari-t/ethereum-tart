`truffle migrate`で失敗。ganacheいる？

# Etherplate

![etherplate red block logo](https://raw.githubusercontent.com/chuckbergeron/etherplate/master/app/images/logos/etherplate-logo--red--lg.png)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

### What is this?

This is an example project showing how you can hook up your Ethereum Non-Fungible Tokens (NFTs, ERC721, similar to CryptoKitties) contract in a DApp. It demos web3 events, and is highly opinionated in that it uses Redux, React, React Router, and Bulma. You can rip out of any these or replace them with your favourites (ie. Skeleton.css instead of Bulma, etc.).

Etherplate uses OpenZeppelin's fantastic community-audited contracts as a base to implement the ERC721 standard.

### View Demo

[View Demo on Netlify (Uses Ropsten testnet)](http://etherplate.netlify.com/)

![Etherplate Demo Gif](https://raw.githubusercontent.com/chuckbergeron/etherplate/master/app/images/etherplate-demo.gif)

# Setup

### Requires NPM & Direnv

Homebrew on Mac OSX:

`brew install node npm direnv`

Apt on Linux:

`apt-get install node npm direnv`

### Install truffle globally:

`npm install truffle -g`

### Install the local NPM packages:

`npm install`

### Environment Variables

1. `cp .envrc.example .envrc`

2. Enter your own twelve random words in the .envrc.

3. Also, we'll leverage Infura's Ethereum Ropsten testnet node, so make sure to set up an account and paste your private key in your .envrc.

4. Use `direnv allow` to export the env vars into your current terminal shell.

### Ganache (CLI)

Create a directory for ganache-cli to store it's database in:

`mkdir .ganache`

### Compile the Solidity code

`truffle compile`

### Migrate the Contracts

This will deploy the contract to the network (tip: use --network=ropsten to deploy to Ethereum's Ropsten Testnet)

`truffle migrate`

# Run the Project

Make sure the truffle contracts are compiled and migrated.

In one terminal window, run the ganache-cli (local Ethereum RPC test node) with:

`./ganache.sh`

Once Ganache is running, in another terminal start the Webpack dev server.

`npm run dev`

Your server should now be running at http://127.0.0.1:8080

### truffle.js & truffle-config.js

Why is there both a truffle and truffle-config file?

* On Windows, truffle-config.js is required. You can safely delete the one you don't need (ie on Mac/Linux you can delete truffle-config.js)

# Building the Project

`npm run build`

*Note: Currently we are manually migrating contracts against the Ropsten & Rinkeby testnets, and checking the build into the repo. This is less than ideal. It would be better to use a build script such as the [netlify-build.sh](https://github.com/chuckbergeron/etherplate/blob/master/netlify-build.sh) file and compile contracts on the server.*

# Running the Tests

For the Solidity contract's truffle test suite:

`truffle test`

To run the DApp test suite (React components, etc):

`npm test`

--------------------

## Toast Messages

Examples of a bunch of different looking toast messages to show on an error message, success, info, etc.:

```
  toastr.light('test', 'message', { icon: 'info', status: 'info' })
  toastr.light('test', 'message', { icon: 'success', status: 'success' })
  toastr.light('test', 'message', { icon: 'warning', status: 'warning' })

  toastr.success('test', 'message')
  toastr.info('test', 'message')
  toastr.warning('test', 'message')
  toastr.error('test', 'message')
```

#### Etherplate Wordmark

The Etherplate Wordmark is set in Sign Painter: https://typekit.com/fonts/signpainter
