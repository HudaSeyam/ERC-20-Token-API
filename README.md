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
  
## API Endpoints

| Endpoint                               | Method | Request Body Example                                   |
|----------------------------------------|--------|-------------------------------------------------------|
| `/api/totalSupply`                    | GET    | N/A                                                   |
| `/api/balance/:address`               | GET    | N/A                                                   |
| `/api/transfer`                       | POST   | `{ "recipientAddress": "0xRecipientAddress", "amount": "100" }` |
| `/api/approve`                        | POST   | `{ "spenderAddress": "0xSpenderAddress", "amount": "50" }` |
| `/api/transferFrom`                  | POST   | `{ "fromAddress": "0xOwnerAddress", "toAddress": "0xRecipientAddress", "amount": "30" }` |
| `/api/allowance/:owner/:spender`      | GET    | N/A                                                   |

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

### 4. Compile and Migrate Smart Contract

Use the Truffle Framework to compile the Solidity smart contract and deploy it to your local blockchain (Ganache):
```bash
truffle compile
truffle migrate
```
- truffle compile: Compiles the Solidity contract (Storage.sol).
- truffle migrate: Deploys the contract to the blockchain (in this case, Ganache).
  
### 5. Setup Ganache Address

Before running the API, ensure that you replace the contract and account addresses in the `api.js` file with the addresses provided by Ganache.

1. **Open `api.js`**:
2. **Update Contract Address**:
 Open the `api.js` file and replace the following lines:

```javascript
var myAddress = '0x6Ef2008935c566100f799f9CE3a992aeC8C1f1C8'; // Your account address
var contractAddress = "0xe61ae5A2124BE55A303C4F70cB9899079eB10A9b"; // Deployed contract address
```

### 6. Run the Express server:
The server will run on http://localhost:3030
```bash
node .\API\api.js
```
 ### 7. Testing with Postman
You can use Postman to test the API endpoints provided by the ERC-20 Token API.

1. **Launch Postman**.
2. **Test the Endpoints**:Use the above API endpoints to interact with the smart contract
3. **Sending Requests**:
   - For `GET` requests, simply enter the endpoint URL and click **Send**.
   - For `POST` requests, select the **Body** tab, choose **raw** and set the format to **JSON**, then paste the appropriate request body.

4. **Review Responses**: The API will return JSON responses, which you can review to verify that the contract is functioning as expected.

 
