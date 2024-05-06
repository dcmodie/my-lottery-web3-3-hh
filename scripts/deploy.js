const hre = require('hardhat');
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the accountttt:', deployer.address);
  // const contract = await ethers.deployContract('ClassToken');
  // console.log('Contract address:', await contract.getAddress());
  const initialSupply = hre.ethers.parseEther('10000.0');
  const MyContract = await hre.ethers.getContractFactory('ClassToken');
  token = await MyContract.deploy(initialSupply);
  await token.waitForDeployment();
  const addr = await token.getAddress();

  console.log('ClassToken deployyed to:', addr);
}
//Deploy
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// //contract.deploy(BigInt(new_x)) should cover your issue.
// const initialSupply = ethers.utils.parseEther('10000.0')
// const ClassToken = await ethers.getContractFactory("ClassToken")
// const token = await ClassToken.deploy(initialSupply)
// await token.deployed()
