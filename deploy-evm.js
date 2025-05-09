const { ethers } = require("ethers");
require("dotenv").config();

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.ARB_RPC_URL);
  const wallet = new ethers.Wallet(process.env.ARB_PRIVATE_KEY, provider);

  const DiamondzTON = await (await ethers.getContractFactory("DiamondzTON")).connect(wallet);
  const contract = await DiamondzTON.deploy();
  await contract.deployed();

  console.log("✅ DiamondzTON deployed at:", contract.address);
}

main().catch(console.error);
