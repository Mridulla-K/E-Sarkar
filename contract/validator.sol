// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {

  struct Validator {
    address validatorAddress; 
    uint depositAmount;
  }

  mapping(address => Validator) public validators;

  function deposit() public payable {
    require(msg.value >= 1 ether, "Deposit must be >= 1 ether");

    Validator storage validator = validators[msg.sender];

    if (validator.depositAmount > 0) {
      validator.depositAmount += msg.value;
    } else {
      validator.validatorAddress = msg.sender;
      validator.depositAmount = msg.value;      
    }
  }

  function withdraw() public {
    Validator storage validator = validators[msg.sender];
    require(validator.depositAmount > 0, "No deposit found");

    uint amountToWithdraw = validator.depositAmount;
    validator.depositAmount = 0;

    payable(msg.sender).transfer(amountToWithdraw);
  }

}