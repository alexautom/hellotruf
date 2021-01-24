pragma solidity >=0.4.22 <0.9.0;
// SPDX-License-Identifier: MIT


contract HelloWorld {
    function sayHello() public pure returns(string memory){
        return("hello world");
    }
}
