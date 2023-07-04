require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// require("@nomiclabs/hardhat-ethers");

// const { API_URL } = process.env;

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/Zt3yF0jTCOZLF1mkXYaA5ss5yg6eveHf",
      accounts: [
        `0xa4117e68c418a3996a555918131e312bdce679a6333eb5688dfe0317be0a8c6d`,
      ],
    },
  },
};
