# ERC-20 Token API
This project demonstrates the deployment of an ERC-20 token smart contract on the **Ethereum** blockchain and exposes **API** endpoints using **Express** and **Web3.js** to interact with the smart contract. The token is designed according to the **ERC-20** standard and allows basic functionalities such as transferring tokens, approving spenders, and querying balances.

## Project Description
The ERC-20 token standard creates fungible tokens on the Ethereum blockchain. This smart contract implements essential methods defined by the ERC-20 standard:

### ERC-20 Smart Contract
- **totalSupply**: Returns the total supply of the tokens. Once the limit is reached, the smart contract will not allow the creation of additional tokens.
- **balanceOf(address)**: Returns the balance of the given address.
- **transfer(address, uint256)**: Transfers amount of tokens from the sender's address to a specified address.
- **transferFrom(address, address, uint256)**: Allows the transfer of tokens from one user to another, based on a previous approval.
- **approve(address, uint256)**: Approves a spender to transfer tokens on behalf of the token holder.
- **allowance(address, address)**: Checks the amount of tokens a spender is allowed to transfer on behalf of a token holder.

### Additional methods for improved usability:
- **name**: Returns the name of the token.
- **symbol**: Returns the token's symbol.
- **decimals**: Defines the number of decimal places the token uses (e.g., 18 means tokens are divisible up to 18 decimal places).

### API Features
The Express API allows to interact with the smart contract through HTTP requests. It supports:
- Token transfer between accounts.
- Approval of spenders to spend on behalf of token holders.
- Transfer of tokens by approved spenders using transferFrom.
- Checking balances of wallet addresses.
- Checking the allowance for spenders.
  
  ### Built Using
- **Truffle**: Development framework for Ethereum smart contracts.
- **Ganache**: Personal blockchain for Ethereum development.
- **Node.js**: JavaScript runtime environment.
- **Web3.js**: JavaScript library to interact with Ethereum.
- **Express**: Web application framework for Node.js.
- **Postman**: Tool for testing APIs
