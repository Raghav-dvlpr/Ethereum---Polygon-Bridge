// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './TokenBase.sol';

contract TokenMatic is TokenBase {
  constructor() TokenBase('Matic Token', 'MATIC') {}
}
