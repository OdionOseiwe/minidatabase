require("dotenv").config({ path: ".env" });
//import { BytesLike } from "ethers";
const { ethers } = require("hardhat");

async function main() {
   
    console.log('deploying....');
    const Database = await ethers.getContractFactory("databse");
    const database= await Database.deploy();
  
    await database.deployed();
  
    console.log("deployed to this address", database.address);
  }

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  

