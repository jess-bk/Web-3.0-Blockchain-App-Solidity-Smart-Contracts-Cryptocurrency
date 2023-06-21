require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    Sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.SEPOLIA_ACCOUNTS],
    },
  },
};
console.log(process.env.SEPOLIA_URL);
console.log(process.env.SEPOLIA_ACCOUNTS);
