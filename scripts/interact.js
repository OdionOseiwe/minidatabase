require("dotenv").config({ path: ".env" });
//import { BytesLike } from "ethers";
const { ethers } = require("hardhat");

async function start() {
    // let provider = {
    //     PrivateKey: process.env.ACCOUNT_PRIVATE_KEY ,
    //     URL: process.env.ALCHEMY_RINKEBY_API_KEY_URL,
    // };

    // const provider2 = ethers.getDefaultProvider("rinkeby", provider.URL);

    let ContractAddress = "0xffca6a117d5fc15395a359F673649f860A295340";

    const owner = "0x5D63564EeF4657F360343196A7bd86ae18d3a92A"
    
    const student = "0x84239DE242af370721397b37F8D910366DDcad1d"

    const student2 = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

    const Database = await ethers.getContractAt("Idatabase", ContractAddress);

    //let register = await Database.register("jude", student2, 10, [9,11,7]);
//console.log('it went through', register);

    let returns = await Database.ReStudent(student2);
    let returning = await returns.wait();
    console.log(returning);

    // console.log(returns.events);

    // console.log("this is it" ,_returns);
    // let waits = await (await returns.wait()).logs[0].topics[0];
    // let waits = await (await returns.wait()).events[0].topics;
    
    // console.log(waits);S

    //await Database.updatescore(8, student);

    // (await clone2.wait()).logs[0].topics[0];
    // await Database.updateScore(9, student)

    // let all = await Database.reStudents()
    // console.log('this is all the', all);
}

start().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});  