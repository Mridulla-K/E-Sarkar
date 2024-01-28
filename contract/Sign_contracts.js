const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY');

const contractAddress = '0x4776a981d249a39e5c590659a145911157a06c62'; // Smart contract address
const privateKey = '0x...'; // User's private key
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

// Create a transaction
const transactionObject = {
  to: contractAddress,
  gas: 2000000,
  gasPrice: 20000000000,
  data: '0x...', // Encoded contract method and parameters
};

// Sign the transaction
const signedTransaction = await web3.eth.accounts.signTransaction(transactionObject, privateKey);

// Send the signed transaction to the network
const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

console.log('Transaction receipt:', receipt);
