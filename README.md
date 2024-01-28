# E-Sarkar: A Blockchain-Based Voting System

## Overview
E-Sarkar is a blockchain-based voting system that aims to revolutionize democracy in India by enabling secure, transparent, and efficient elections. This system leverages blockchain technology to address key challenges plaguing current electronic voting machines like:
- Identity theft
- Lack of verifiability 
- Susceptibility to electoral fraud.

The goal is to implement a resilient permisionless decentralized voting application on the CosVM blockchain, which is CrossChain Communication Platform utilizing both EVM and Cosmos.

## Features
- Secure authentication using digital wallets linked to voter IDs and iris scans.
- Validator Deposit voting system to prevent double spending.
- Zero-knowledge proofs for voter anonymity.
- Tamper-proof and immutable vote records on blockchain.
- Minimizing gas usage, you can increase the contract’s speed and reduce the overall cost of usage.
- hardhat-gas-reporter package to accurately calculate the gas cost.
- Gas-Efficient Data Structure - Mapping.
- Real-time vote tallying for immediate transparent results.
- End-to-end verifiability using transaction IDs to independently verify votes the user has caste.
- Smart contracts to automate vote counting and enforce election rules, which are Digitally Signed.

## Technical Implementation
- **Platform:** CosomWasm IDE, Visual Studios
- **Consensus:** Proof of Stake
- **Languages:** Solidity, JavaScript, ZoKarts, HTML, CSS and Python 
- **APIs:** Web3.js, Metamask Wallet

### Getting Started
**Prerequisites:**
- Node.js 
- npm
- Hardhat
- CosVM SDK
- ZoKrates toolbox for zkSNARKs on CVM
- 

**Installation:**
```bash
git clone https://github.com/username/e-sarkar.git
npm install
cp .env.example .env
npm test
npm run dev

Roadmap
Voter registration and authentication
Ballot creation and management
Secure voting workflow
Vote verification and tallying
Admin portal
Voter portal
Additional language support
Contributors
Harshitha R.S
Nidhi Gummaraju
Mridulla K
License
This project is licensed under the MIT license. See LICENSE for more details.

References
[Securing Voting Systems](https://ieeexplore.ieee.org/document/10053410)
[Database](https://www.eci.gov.in/)
