import { Signer } from "ethers";
import { ethers } from "hardhat";

async function mainnetFork() {
    const addrr = "0x75c0c372da875a4fc78e8a37f58618a6d18904e8"
    const IERC20 = await ethers.getContractAt ("IERC20", "0x07865c6E87B9F70255377e024ace6630C1Eaa37F")
    const balance =await (await IERC20).balanceOf(addrr)

    console.log(balance)

    // Account Impersonation
    //@ts-ignore
    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [addrr],
    });

    const signer: Signer = await ethers.getSigner(addrr)
    const status = await IERC20.connect(signer).transfer("0x23618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f", "10")
    console.log(status)

    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
mainnetFork().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  