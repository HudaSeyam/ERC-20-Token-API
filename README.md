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

## Installation


### 1. Clone the Repository
```bash
git clone https://github.com/HudaSeyam/ERC-20-Token-API.git
cd erc-20-token-api
```
### 2. Install Dependencies

Once inside the project directory, install the required dependencies using Node Package Manager (NPM):
```bash
npm install
```
### 3. Install Ganache

Ganache is required as your personal Ethereum blockchain for local development. You can either install the desktop version or use the CLI version.
```bash
npm install -g ganache-cli
```
Once installed, start Ganache to simulate the blockchain:
```bash
ganache-cli
```
### 4. Configure MetaMask

To interact with your DApp through the browser, install the MetaMask extension for Google Chrome.
After installation:

- Connect MetaMask to the Ganache network (usually http://127.0.0.1:7545).
- Import an account from Ganache by using the private key from one of the accounts listed in the Ganache terminal.

### 5. Compile and Migrate Smart Contract

Use the Truffle Framework to compile the Solidity smart contract and deploy it to your local blockchain (Ganache):
```bash
truffle compile
truffle migrate
```
- truffle compile: Compiles the Solidity contract (Storage.sol).
- truffle migrate: Deploys the contract to the blockchain (in this case, Ganache).
  
