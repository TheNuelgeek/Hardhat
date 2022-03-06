// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface Iecommerce{
    function buyHouse( address buyer)external  payable returns(string memory message);

    function buyerChecknumOfHouseBought(address buyerAddr) external view returns(uint[]memory num);
}