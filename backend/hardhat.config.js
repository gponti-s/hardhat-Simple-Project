require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  paths: {
    artifacts: "../frontend/src/artifacts",
  },
  networks:{
    hardhat: {
      chainId: 1337
    }
  },
  solidity: "0.8.19",
};
