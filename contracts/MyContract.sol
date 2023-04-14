// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyContract is Initializable {
    uint256 public constantValue;
    uint256 private _stateVariable;

    event StateVariableChanged(uint256 oldValue, uint256 newValue);

    function initialize(uint256 _constantValue, uint256 _stateVariable) public initializer {
        constantValue = _constantValue;
        _stateVariable = _stateVariable;
    }

    function getStateVariable() public view returns (uint256) {
        return _stateVariable;
    }

    function setStateVariable(uint256 newState) public {
        uint256 oldState = _stateVariable;
        _stateVariable = newState;
        emit StateVariableChanged(oldState, newState);
    }
}
