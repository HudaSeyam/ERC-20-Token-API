const ERC20Token = artifacts.require("Token");

module.exports = function (deployer) {
  const initialSupply = 1000000; 
  deployer.deploy(ERC20Token,initialSupply);
};
