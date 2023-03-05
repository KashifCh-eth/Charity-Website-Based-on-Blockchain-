require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config;

/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/BxlGZyWWKOZ89rZkipaaGn9Spg6_RmEG",
      accounts: [
        "0xa0238d2ae833f078dfa7d338a436f40e064c4230679e21dbaca4f1818ba92920",
      ],
    },
  },
  etherscan: {
    apikey: {
      goerli: W9IG7VF4CSEER12N82YBA8PYXCCIKIQ9I1,
    },
  },
};
