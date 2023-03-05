const hre = require("hardhat");
const { run } = require("hardhat");
require("@nomiclabs/hardhat-etherscan");

const verify = async (contractAddress, args) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(e);
    }
  }
};

async function main() {
  const donate = await hre.ethers.getContractFactory("Donation");
  const contract = await donate.deploy();
  await contract.deployed();
  console.log(`contract Address : ${contract.address} `);
  verify(contract.address, []);
}
main()
  .then(() => {
    console.log("Done!");
  })
  .catch((error) => {
    console.log(error);
  });
