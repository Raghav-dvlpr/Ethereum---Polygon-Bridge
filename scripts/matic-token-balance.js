const TokenMatic = artifacts.require('./TokenMatic.sol');

module.exports = async done => {
  const [recipient, _] = await web3.eth.getAccounts();
  const tokenMatic = await TokenMatic.deployed();
  const balance = await tokenMatic.balanceOf(recipient);
  console.log(balance.toString());
  done();
}
