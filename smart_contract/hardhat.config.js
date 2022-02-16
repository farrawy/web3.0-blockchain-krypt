// https://eth-ropsten.alchemyapi.io/v2/O2fs3emN17iHJphLLWRrMYfMByx2luY5

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/O2fs3emN17iHJphLLWRrMYfMByx2luY5',
      accounts: [ '06051d327e20b5829c303e311c91c92a64ac846f58ca2f8776ec045a7e5b9df1' ]
    }
  }
}