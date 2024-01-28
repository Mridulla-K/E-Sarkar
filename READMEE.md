# E-Sarkar: A Blockchain-Based Voting System

## Overview
E-Sarkar is a blockchain-based voting system that aims to revolutionize democracy in India by enabling secure, transparent, and efficient elections. This system leverages blockchain technology to address key challenges plaguing current electronic voting machines like identity theft, lack of verifiability, and susceptibility to electoral fraud.

The goal is to implement a resilient decentralized voting application on the CosVM blockchain platform that upholds the core principles of democratic elections - anonymity, accuracy, verifiability, and transparency.

## Features
- Secure authentication using digital wallets linked to voter IDs and iris scans
- Token-based voting system to prevent double spending
- Zero-knowledge proofs for voter anonymity
- Tamper-proof and immutable vote records on blockchain
- Real-time vote tallying for immediate transparent results
- End-to-end verifiability using transaction IDs to independently verify votes
- Smart contracts to automate vote counting and enforce election rules

## Technical Implementation
- **Platform:** CosVM blockchain
- **Consensus:** Proof of Stake
- **Languages:** Solidity, JavaScript
- **Frontend:** React
- **APIs:** Web3.js

### Getting Started
**Prerequisites:**
- Node.js
- npm
- CosVM SDK

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
Blockchain-based E-Voting System
Decentralized Voting Application
Securing Voting Systems