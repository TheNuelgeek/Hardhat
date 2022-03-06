import { ethers } from "hardhat";

async function runAddNum() {
    // deploying contract
    const AddNumbers = await ethers.getContractFactory("AddNumber");
    const AddNumber2 = await AddNumbers.deploy();
    await AddNumber2.deployed();

    // passing inputs
    const addnum = await AddNumber2.addNum(1,2);
    console.log(await AddNumber2.getAddition())
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
runAddNum().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });