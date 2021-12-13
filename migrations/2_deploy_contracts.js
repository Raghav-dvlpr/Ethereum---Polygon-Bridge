const TokenEth = artifacts.require('TokenEth.sol');
const TokenMatic = artifacts.require('TokenMatic.sol');
const BridgeEth = artifacts.require('BridgeEth.sol');
const BridgeMatic = artifacts.require('BridgeMatic.sol');

module.exports = async function (deployer, network, addresses) {
  if(network === 'ethTestnet') {
    await deployer.deploy(TokenEth);
    const tokenEth = await TokenEth.deployed();
    await tokenEth.mint(addresses[0], 1000);
    await deployer.deploy(BridgeEth, tokenEth.address);
    const bridgeEth = await BridgeEth.deployed();
    await tokenEth.updateAdmin(bridgeEth.address);
  }
  if(network === 'matic') {
    await deployer.deploy(TokenMatic);
    const tokenMatic = await TokenMatic.deployed();
    await deployer.deploy(BridgeMatic, tokenMatic.address);
    const bridgeMatic = await BridgeMatic.deployed();
    await tokenMatic.updateAdmin(bridgeMatic.address);
  }
};






/// notes for impelmentation

// commands to execute
// 1. truffle migrate --reset --network ethTestnet
// 2. truffle migrate --reset --network matic

// checking token balance in both network
// 3. truffle exec scripts/eth-token-balance.js --network ethTestnet
// 4. truffle exec scripts/matic-token-balance.js --network matic

// for transfer tokens
//before transfer open another terminal and run another command
// 5. node scripts/eth-matic-bridge.js

// above command enables the bridge for transaction of tokens
// after created the bridge then run transfer command in previous terminal
// 6. truffle exec scripts/eth-matic-transfer.js --network ethTestnet

// after the tranaction gets compeleted you can see the transaction hash on new terminal which you enabled bridge.

//now to check the balance to network.
// 7. truffle exec scripts/eth-token-balance.js --network ethTestnet
// 8. truffle exec scripts/matic-token-balance.js --network matic




