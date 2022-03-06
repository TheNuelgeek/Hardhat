import { BigNumber } from "ethers";
import { ethers } from "hardhat";

async function deployBuild(){
  
    const Building = await ethers.getContractFactory("Building")
    const Building2 = await Building.deploy();
    await Building2.deployed();
  
    const buyHouse = await Building2.buyHouse("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266", {value: ethers.utils.parseEther("10")})
    console.log(buyHouse)
    const seeHouseFunc = await Building2.seeHousesBought()
    console.log(seeHouseFunc);

    const buyercheckFunc = await Building2.buyerChecknumOfHouseBought("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
    console.log(buyercheckFunc)
    //console.log(ethers)

//     const transaction = await contract.deposit({ value: ethers.utils.parseEther("0.1") })
// //sends 0.1 eth
// await transaction.wait()
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deployBuild().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });