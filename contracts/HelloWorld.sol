pragma solidity >=0.4.22 <0.9.0;
// SPDX-License-Identifier: MIT
contract HelloWorld {
    string public message;

    function hello(string memory initialMessage) public {
        message = initialMessage;
        }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}