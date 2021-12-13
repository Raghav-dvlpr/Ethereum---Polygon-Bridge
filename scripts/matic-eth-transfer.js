const BridgeMatic = artifacts.require('./BridgeMatic.sol');

module.exports = async done => {
  const [recipient, _] = await web3.eth.getAccounts();
  
  //const bridgeEth = await BridgeEth.deployed();
  const tokenMatic = await BridgeMatic.deployed();
  //await bridgeEth.burn(recipient, 1000);
  await tokenMatic.burn(recipient, 10);
  console.log(recipient);
  done();
}