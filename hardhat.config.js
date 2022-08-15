require("@nomicfoundation/hardhat-toolbox");
//import "@nomiclabs/hardhat-ethers";
require("dotenv").config({ path: ".env" });

const ALCHEMY_RINKEBY_API_KEY_URL = process.env.ALCHEMY_RINKEBY_API_KEY_URL;

const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;

const ACCOUNT_PRIVATE_KEY2 = process.env.ACCOUNT_PRIVATE_KEY2;


const ALCHEMY_GOERLI_API_KEY_URL = process.env.ALCHEMY_GOERLI_API_KEY_URL;

const ACCOUNT_PRIVATE_KEY_GOERLI = process.env.ACCOUNT_PRIVATE_KEY_GOERLI;

const ALCHEMY_ROSPTEN_API_KEY_URL = process.env.ALCHEMY_ROSPTEN_API_KEY_URL;

const ACCOUNT_PRIVATE_KEY_ROSPTEN = process.env.ACCOUNT_PRIVATE_KEY_ROSPTEN;



const API_TOKEN = process.env.API_TOKEN;

module.exports = {    
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: ALCHEMY_RINKEBY_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    goerli: {
      url: ALCHEMY_GOERLI_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY_GOERLI],
    },
    rospten: {
      url: ALCHEMY_ROSPTEN_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY_ROSPTEN],
    }
  }
};
