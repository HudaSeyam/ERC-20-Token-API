const fs = require('fs');
const web3 = require('web3');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Set up the Express app
const app = express();
const port = 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Connect to local Ethereum network (Ganache)
web3js = new web3(new web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// Read ABI and Bytecode from the compiled contract JSON file
const contractFilePath = path.join(__dirname,'..','build', 'contracts', 'Token.json');
const contractJSON = JSON.parse(fs.readFileSync(contractFilePath, 'utf8'));
const contractABI = contractJSON.abi;

// Define account addresses and gas configurations
var myAddress = '0x6Ef2008935c566100f799f9CE3a992aeC8C1f1C8';
var contractAddress = "0xe61ae5A2124BE55A303C4F70cB9899079eB10A9b";

// Set up the contract instance
var TokenContract = new web3js.eth.Contract(contractABI, contractAddress);

app.get('/', function (req, res) {
    res.send("hello");
});

// API to get the total supply of tokens
app.get('/api/totalSupply', async (req, res) => {
    try {
        const totalSupply = await TokenContract.methods.getTotalSupply().call();
        res.json({ totalSupply: web3.utils.fromWei(totalSupply, 'ether') });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API to get the balance of a specific address
app.get('/api/balance/:address', async (req, res) => {
    const { address } = req.params;

    try {
        const balance = await TokenContract.methods.getBalanceOf(address).call();
        res.json({ balance: web3.utils.fromWei(balance, 'ether') });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API to transfer tokens
app.post('/api/transfer', async (req, res) => {

    const { recipientAddress, amount } = req.body;
    try {
        const receipt = await TokenContract.methods.transfer(`${recipientAddress}`, web3js.utils.toWei(`${amount}`, 'ether')).send({
                from: myAddress,
                gas: 150000
            });

        res.status(200).json({ message: 'Transfer successful', receipt });

        } catch (error) {

            res.status(500).json({ message: 'Error during transfer', error: error.toString() });
        }
});

// API to approve tokens
app.post('/api/approve', async (req, res) => {
    const { spenderAddress, amount } = req.body;

    try {
        const receipt = await TokenContract.methods.approve(`${spenderAddress}`, web3js.utils.toWei(`${amount}`, 'ether')).send({
            from: myAddress,
            gas: 150000
        });
        res.status(200).json({ message: 'Approval successful', receipt });
    } catch (error) {
        res.status(500).json({ message: 'Error during approval', error: error.toString() });
    }
});

// API to transfer tokens using transferFrom
app.post('/api/transferFrom', async (req, res) => {
    const { fromAddress, toAddress, amount } = req.body;
    const amountInWei = web3.utils.toWei(`${amount}`.toString(), 'ether');

    // Check the allowance before transferring
    const allowance = await TokenContract.methods.allowance(`${fromAddress}`, myAddress).call();
    if (parseInt(allowance) < parseInt(amountInWei)) {
        return res.status(400).json({ error: 'Allowance exceeded. Please approve more tokens.' });
    }
    try {
        const receipt = await TokenContract.methods.transferFrom(`${fromAddress}`, `${toAddress}`, amountInWei).send({
            from: myAddress,
            gas: 150000
        });
        res.json({ message: 'Transfer from successful', receipt });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API to get allowance between two addresses
app.get('/api/allowance/:owner/:spender', async (req, res) => {
    const { owner, spender } = req.params;
    try {
        const allowance = await TokenContract.methods.getAllowance(owner, spender).call();
        res.json({ allowance: web3.utils.fromWei(allowance, 'ether') });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(port, () => console.log(`API server running on port ${port}`));