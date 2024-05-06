// scripts/interact.js
const { ethers } = require('hardhat');

async function main() {
  console.log('Getting the ClassToken...\n');
  const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
  const myClassToken = await ethers.getContractAt(
    'ClassToken',
    contractAddress
  );

  // List of all ERC20 public functions that can be called via Hardhat
  console.log(`-------------------------------------------------------`);
  console.log(`List of all ERC20 public functions called via Hardhat`);
  console.log(`-------------------------------------------------------`);
  const name = await myClassToken.name();
  console.log(`The smart contract created the Token with Name: ${name}`);

  console.log(`-------------------------------------------------------`);
  console.log(`All Done !`);
  console.log(`-------------------------------------------------------`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
