import { ethers } from "hardhat";

async function deployScript(){
    // deploy contract
    const classwork =await ethers.getContractFactory("Classwork");
    const classwork2 = await classwork.deploy();
    await (await classwork2).deployed();
    const IN = {
        leaves:5,
        bookname: "Tick Cover"
    }

    //passing inputs
    const tx = await (await classwork2).setbook(IN);
    const txt = await tx.wait()
    //@ts-ignore
    console.log(txt.events[0].args[0].leaves)

    const tx2 = await(await classwork2).seeBooks(0);
    console.log(tx2);
   
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deployScript().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });