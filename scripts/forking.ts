import { BigNumber, BigNumberish, BytesLike, Signer } from "ethers";
import { ethers, network } from "hardhat";
import { hrtime } from "process";

async function mainnetFork() {
    // Mainnet forking

    const addrr = "0x2a63a682b34c92ea39083402acdfb4f77c2950b3"
    const IERC20 = await ethers.getContractAt ("IERC20", "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39")
    // const balance =await (await IERC20).balanceOf(addrr)

    //console.log(`balance before ${balance}`)

    // Account Impersonation()
    //@ts-ignore
    // await hre.network.provider.request({
    //     method: "hardhat_impersonateAccount",
    //     params: [addrr],
    // });

    // const signer: Signer = await ethers.getSigner(addrr)
    // const status = await IERC20.connect(signer).transfer("0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199", "10")
    //console.log(status)

    // setstorageAt

    const x:BytesLike = new ethers.utils.AbiCoder().encode(["address","uint256"],[addrr, 0])
    const hashedVal:BytesLike = ethers.utils.solidityKeccak256(["bytes"], [x])
    const dec: BigNumber = BigNumber.from(hashedVal)
    console.log(hashedVal)
    
    const Position = await ethers.provider.getStorageAt(IERC20.address,3)
    console.log(Position)
    const balance =await (await IERC20).balanceOf(addrr)
    console.log(balance)

    await network.provider.send("hardhat_setStorageAt", [
        IERC20.address,
        hashedVal,
        "0x0000000000000000000000000000000000000000000000000000000eddaf4240",
    ]);
    const balance2 =await (await IERC20).balanceOf(addrr)
    console.log(balance2)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
mainnetFork().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  