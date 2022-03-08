import { providers } from "ethers";
import { ethers, network } from "hardhat";

const IRouterAddr = '0xf164fC0Ec4E93095b804a4795bBe1e041497b92a'
const uni = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
const usdt = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
const usdtHolder = '0x3b6e5ed077bcfb0d619f013696aea8a4c0597b93'
const amount = 1000e6
const warpEth = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

async function swap(){
    //const provide = ethers.provider;
    const Usdtsigner = await ethers.getSigner(usdtHolder);
    const uniswapContract = await ethers.getContractAt('IERC20', uni)
    const router = await ethers.getContractAt('IRouter', IRouterAddr, Usdtsigner)
    const usdtContract = await ethers.getContractAt("IERC20", usdt, Usdtsigner)
    console.log(`Uniswap token balance: ${await uniswapContract.balanceOf(usdtHolder)}`);
    console.log(`Usdt address is: ${await usdtContract.balanceOf(usdtHolder)}`);

    //@ts-ignore
    await network.provider.send("hardhat_setBalance", [
        usdtHolder,
        "0x2000000000000000",
    ]);

    console.log(`New balance:${await ethers.provider.getBalance(usdtHolder)}`)

    // Impersonation
    //@ts-ignore
    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [usdtHolder],
    });

    await usdtContract.approve(IRouterAddr,amount)

    await router.swapExactTokensForTokens(amount,0,[usdt,warpEth, uni], usdtHolder, 1646749519)

    console.log(`Usdt holder's New balance: ${await uniswapContract.balanceOf(usdtHolder)}`)


}

swap().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });