/*
 * @Author: 李志刚
 * @Date: 2023-04-14 22:56:27
 * @LastEditors: 李志刚
 * @LastEditTime: 2023-04-14 22:56:36
 * @Description: 
 */
const hre = require("hardhat");

async function main() {
  const MyContract = await hre.ethers.getContractFactory("MyContract");
  const proxy = await hre.upgrades.deployProxy(MyContract, [42, 100]);
  await proxy.deployed();

  console.log("MyContract deployed to:", proxy.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
