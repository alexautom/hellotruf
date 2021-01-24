var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'tip group nice dignity candy spike safe multiply give veteran obscure winter';

module.exports = {
  
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/65c1b7f8d0844d4987bb7b4510f7e44b")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: 'JIK9JBMTI3N8GJ5FRJ6XADPZ73TMUFZK5M'
  }
};