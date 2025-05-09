require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    arbitrum: {
      url: process.env.ARB_RPC_URL,
      accounts: [process.env.ARB_PRIVATE_KEY]
    }
  }
};
