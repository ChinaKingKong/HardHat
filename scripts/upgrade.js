/*
 * @Author: 李志刚
 * @Date: 2023-04-14 22:58:35
 * @LastEditors: 李志刚
 * @LastEditTime: 2023-04-14 23:19:46
 * @Description: 
 */
const hre = require("hardhat");

async function main() {
  const proxyAddress = "0x81d1c77038E94ad48dB2150B4091A104Bd81675C"; // 请替换为部署的代理合约地址

  const MyContractV2 = await hre.ethers.getContractFactory("MyContractV2");
  await hre.upgrades.upgradeProxy(proxyAddress, MyContractV2);

  console.log("MyContract upgraded to V2");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
