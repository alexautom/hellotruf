var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = '0xE0530AE6Ee9638E64567c104a7bf25544710c67A';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/65c1b7f8d0844d4987bb7b4510f7e44b")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};