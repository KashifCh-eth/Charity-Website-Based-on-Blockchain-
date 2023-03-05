const hre = require("hardhat");

async function getbalance(address) {
  const BalanceOfaddeess = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(BalanceOfaddeess);
}

async function ShowBlanace(addresss) {
  let counter = 0;
  for (const address of addresss) {
    console.log(`balance address ${counter}  is ${await getbalance(address)}`);
    counter++;
  }
}

async function checkMemo(Memo) {
  for (const memos of Memo) {
    const name = memos.name;
    const time = memos.timestamp;
    const message = memos.message;
    const from = memos.from;
    console.log(`At ${time},name ${name},address ${from},message ${message}`);
  }
}

async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const donate = await hre.ethers.getContractFactory("Donation");
  const contract = await donate.deploy();
  console.log(`deploying...`);
  await contract.deployed();
  console.log(`Contract Address ${contract.address}`);

  const amount = { value: hre.ethers.utils.parseEther("1") };
  console.log(`initial Price of address`);
  const addresses = [
    owner.address,
    from1.address,
    from2.address,
    from3.address,
  ];
  await ShowBlanace(addresses);
  console.log(`Calling contract function`);
  await contract.connect(from1).Pey("from1", "Very nice Web", amount);
  await contract.connect(from2).Pey("from2", "Very nice Charaity", amount);
  await contract.connect(from3).Pey("from3", "Very nice information", amount);

  console.log("after Buying addresss");
  await ShowBlanace(addresses);

  const memos = await contract.getMemo();
  checkMemo(memos);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
