/*
 * @Author: 李志刚
 * @Date: 2023-04-14 22:46:14
 * @LastEditors: 李志刚
 * @LastEditTime: 2023-04-14 22:54:57
 * @Description: 
 */
require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");

const { privateKey } = require('./secrets.json');

module.exports = {
  solidity: "0.8.4",
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [privateKey]
    }
  }
};
