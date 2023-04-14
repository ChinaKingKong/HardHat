const hre = require("hardhat");

async function main() {
  const proxyAddress = "0x81d1c77038E94ad48dB2150B4091A104Bd81675C"; // 请替换为部署的代理合约地址

  // 获取升级后的合约实例
  const MyContractV2 = await hre.ethers.getContractFactory("MyContractV2");
  const contract = MyContractV2.attach(proxyAddress);

  // 监听事件
  contract.on("StateVariableChanged", (oldValue, newValue, event) => {
    console.log(
      `StateVariableChanged: oldValue=${oldValue.toString()}, newValue=${newValue.toString()}`
    );
  });

  contract.on("AnotherStateVariableChanged", (oldValue, newValue, event) => {
    console.log(
      `AnotherStateVariableChanged: oldValue=${oldValue.toString()}, newValue=${newValue.toString()}`
    );
  });

  // 读取常量和状态变量
  const constantValue = await contract.constantValue();
  console.log("Constant value:", constantValue.toString());

  const stateVariable = await contract.getStateVariable();
  console.log("State variable:", stateVariable.toString());

  const anotherStateVariable = await contract.getAnotherStateVariable();
  console.log("Another state variable:", anotherStateVariable.toString());

  // 更新状态变量
  const newState = 200;
  await contract.setStateVariable(newState);
  console.log("State variable updated to:", newState);

  const newAnotherState = 300;
  await contract.setAnotherStateVariable(newAnotherState);
  console.log("Another state variable updated to:", newAnotherState);

  // 再次读取状态变量以验证更改
  const updatedStateVariable = await contract.getStateVariable();
  console.log("Updated state variable:", updatedStateVariable.toString());

  const updatedAnotherStateVariable = await contract.getAnotherStateVariable();
  console.log(
    "Updated another state variable:",
    updatedAnotherStateVariable.toString()
  );

  // 等待事件处理完成
  await new Promise((resolve) => setTimeout(resolve, 5000));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
