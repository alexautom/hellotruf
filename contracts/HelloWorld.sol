pragma solidity >=0.4.22 <0.9.0;
// SPDX-License-Identifier: MIT
contract HelloWorld {

    string saySomething;

    constructor()  {
        saySomething = "Hello World!";
    }

    function speak() public view returns(string memory) {
        return saySomething;
    }

    function saySomethingElse(string memory newSaying) public  returns(bool success) {
        saySomething = newSaying;
        return true;
    }

}
