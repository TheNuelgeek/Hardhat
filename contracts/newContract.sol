//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract AddNumber{
    uint a;
    uint b;
    uint c;
    function addNum(uint _a, uint _b)public {
        a = _a;
        b = _b;

        c = _a + _b;

    }
    function getAddition () external view returns(uint) {
        return c;
    }
}