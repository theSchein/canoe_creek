import { ethers } from 'hardhat';

async function main() {

const MyToken = await ethers.getContractFactory("MyToken");
const token = await MyToken.deploy();
await token.waitForDeployment();

  console.log('NFT Contract Deployed at ' + token.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});