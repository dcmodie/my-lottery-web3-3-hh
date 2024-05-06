import { expect } from 'chai';
import { ethers } from 'hardhat';
import hre from 'hardhat';

describe('ClassToken', function () {
  it('Should have the correct initial supplyyy', async function () {
    const initialSupply = hre.ethers.parseEther('10000.0');
    const ClassToken = await hre.ethers.getContractFactory('ClassToken');
    const token = await ClassToken.deploy(initialSupply);

    expect(await token.totalSupply()).to.equal(initialSupply);
  });
});
