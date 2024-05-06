//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ClassToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("ClassToken", "CLT") {
        _mint(msg.sender, initialSupply);
    }
}
// contract TutorialToken is ERC20 {
//     constructor(uint256 initialSupply) ERC20("Tutorial", "TUT") {
//         _mint(msg.sender, initialSupply);
//     }
// }
// constructor(uint256 total) public {
//    totalSupply_ = total;
//    balances[msg.sender] = _totalSupply;
// }

// pragma solidity ^0.8.9;

// import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// contract MySimpleToken is ERC20 {
//     // Define the supply of FunToken: 1,000,000
//     uint256 constant initialSupply = 1000000 * (10 ** 18);

//     // Constructor will be called on contract creation
//     constructor() ERC20("SimpleToken", "STKN") {
//         _mint(msg.sender, initialSupply);
//     }
// }
