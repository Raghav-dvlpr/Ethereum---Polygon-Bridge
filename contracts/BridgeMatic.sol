// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './BridgeBase.sol';

contract BridgeMatic is BridgeBase {
  constructor(address token) BridgeBase(token) {}
}