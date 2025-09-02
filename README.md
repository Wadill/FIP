# FIP (Filecoin Incentive Platform)

Welcome to the **FIP (Filecoin Incentive Platform)**, a decentralized storage solution designed for the **Filecoin Onchain Cloud Alpha Cohort** wavehack. FIP transforms Filecoin into a dynamic, on-chain cloud ecosystem, empowering users with a pastel-themed, responsive dashboard to manage storage, track FIL balances, and optimize retrievals. Built with Next.js, Tailwind CSS, and TypeScript, it integrates FilecoinWarmStorageService, Filecoin Pay, and FilCDN via a mock Synapse SDK, supported by a Node.js backend and Solidity smart contracts on Filecoin Testnet.

- **Repository**: [https://github.com/Wadill/FIP](https://github.com/Wadill/FIP)
- **Last Updated**: 02:02 PM WAT, Tuesday, September 02, 2025

## Table of Contents

- [What It Does](#what-it-does)
- [Features](#features)
- [The Problem It Solves](#the-problem-it-solves)
- [Technologies Used](#technologies-used)
- [Architecture Overview](#architecture-overview)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Smart Contract Deployment](#smart-contract-deployment)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Development](#future-development)
- [Contributing](#contributing)
- [License](#license)

## What It Does

FIP revolutionizes decentralized storage by providing a user-friendly platform for Filecoin network participants. It enables secure data storage and retrieval, real-time analytics, and FIL-based transactions, leveraging Filecoin Onchain Cloud services. The platform incentivizes storage providers with badges and payments, fosters a sustainable ecosystem, and prepares Filecoin for Web3 and AI use cases, all while maintaining privacy and efficiency inspired by Citrea’s zk-rollup architecture.

## Features

- **Pastel-Themed Dashboard**: A responsive UI with sections for accounts, balance, portfolio, transactions, and storage analytics.
- **FilecoinWarmStorageService**: Mock integration for warm storage with Proof of Data Possession (PDP) verification.
- **Filecoin Pay**: Simulated payment processing for FIL and ERC-20 transactions with secure settlement.
- **FilCDN**: Placeholder for fast content delivery network integration.
- **Synapse SDK**: Mock TypeScript SDK for interacting with Filecoin Onchain Cloud services.
- **Real-Time Analytics**: Mock endpoints for storage and price data, extensible with Redstone oracles.

## The Problem It Solves

FIP addresses the transformation of Filecoin from cold-archive storage to a composable cloud framework, tackling slow retrieval times, complex payment integration, and the lack of user-friendly tools for storage providers. It enhances economic incentives, improves data accessibility, and bridges decentralized storage with practical cloud applications, positioning Filecoin as a competitive alternative to centralized solutions.

## Technologies Used

- **Frontend**: Next.js (v13+), Tailwind CSS (v3+), TypeScript (v5+), Axios, @heroicons/react
- **Backend**: Node.js (v18+), Express, Web3.js, Axios, Cors
- **Smart Contracts**: Solidity (v0.8+), Hardhat
- **Blockchain**: Filecoin Calibration Testnet (RPC: `https://filecoin-calibration.chainup.net`)
- **Type Definitions**: @types/axios, @types/web3
- **Development Tools**: npm, Git

## Architecture Overview

- **Frontend**: A Next.js application with a single-page layout (`pages/index.tsx`), using a flexbox structure to manage content and footer placement. Components are modular, with Tailwind CSS for styling and TypeScript for type safety.
- **Backend**: A Node.js/Express server (`backend/server.js`) serving mock API endpoints for prices and storage analytics, connected to Filecoin Testnet via Web3.js.
- **Smart Contracts**: The `FIP` Solidity contract (`contracts/FIP.sol`) manages user balances, stored data, and retrieval counts, deployable with Hardhat.
- **Integration**: Mock Synapse SDK (`src/lib/synapse.ts`) simulates Filecoin Onchain Cloud services, with plans for official SDK integration.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Wadill/FIP.git
   cd FIP
   ```

2. **Install Frontend Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Backend**:
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Install Smart Contract Tools**:
   ```bash
   cd contracts
   npm install --save-dev hardhat
   npx hardhat init
   cd ..
   ```

5. **Configure Environment**:
   - Create a `.env` file in the root with your Filecoin Testnet RPC URL and private key (e.g., `RPC_URL=https://filecoin-calibration.chainup.net`).
   - Update `hardhat.config.ts` with Testnet details.

## Running the Application

1. **Start the Backend**:
   ```bash
   cd backend
   node server.js
   ```
   (Runs on `http://localhost:3001` by default.)

2. **Start the Frontend**:
   ```bash
   npm run dev
   ```
   Access at `http://localhost:3000`.

3. **Verify**:
   - Check the dashboard for mock data (e.g., FIL price, storage analytics).
   - Use developer tools to monitor API calls.

## Smart Contract Deployment

1. **Compile the Contract**:
   ```bash
   cd contracts
   npx hardhat compile
   ```

2. **Deploy to Filecoin Testnet**:
   ```bash
   npx hardhat run scripts/deploy.ts --network filecoinTestnet
   ```
   - Update `scripts/deploy.ts` with the deployed contract address.
   - Configure MetaMask with Filecoin Testnet (Chain ID: 314159).

3. **Interact**:
   - Use the Synapse SDK (`src/lib/synapse.ts`) to call `storeData` and `processPayment`.

## Challenges and Solutions

- **API Limitations**: Limited Filecoin Onchain Cloud APIs led to mock endpoints; solved with Node.js simulations.
- **Contract Adaptation**: Transitioning from Citrea’s zk-rollup to Filecoin’s storage model required contract refactoring; addressed with modular design.
- **UI Compatibility**: Ensuring pastel theme across testnets involved iterative CSS adjustments; resolved with Tailwind’s responsive utilities.
- **SDK Integration**: Absence of official Synapse SDK prompted a mock implementation; planned for official integration in future waves.

## Future Development

- **Official SDK Integration**: Replace mock Synapse SDK with Filecoin Onchain Cloud’s official release.
- **FVM Compute Support**: Add compute-over-data features using Filecoin Virtual Machine.
- **Sustainability Module**: Track energy usage and reward green providers with badges.
- **Mainnet Deployment**: Transition to Filecoin Mainnet with community testing and feedback.
- **AI Analytics**: Expand storage analytics for AI workloads, aligning with Web3 trends.


# FIP Roadmap: Journey to Decentralized Storage Excellence

Welcome to the visual journey of the **FIP (Filecoin Incentive Platform)**, a transformative decentralized storage solution for the Filecoin Onchain Cloud Alpha Cohort. This roadmap outlines our path from Wave 5 to Wave 8, blending innovation, sustainability, and community empowerment with a stunning pastel aesthetic. Each wave is a milestone, illustrated with vibrant diagrams and plans, guiding us toward a scalable, AI-ready storage ecosystem.

---

## Roadmap Overview


## Wave 1: Foundation & Sustainability Hub (Current Wave)

**Status**: In Progress

- **Objective**: Establish FIP as a sustainable storage hub.
- **Features**:
  - Sustainability Dashboard with Redstone-like energy metrics.
  - Green Mining Pool with renewable energy bonuses.
  - Community Forum using Blocksense.
  - Educational Resources on sustainable storage.

---
## Wave 2: Decentralized Storage Marketplace Expansion
**Status**: Planned

- **Objective**: Expand FIP into a marketplace with optimized retrieval and governance.
- **Features**:
  - Retrieval Market Optimizer with FilCDN.
  - Provider Reputation System with on-chain scoring.
  - Community Governance Portal for voting.
  - FWS Integration for custom storage contracts.
- **Plan**: Enhance smart contracts with SLA and reputation logic, upgrade backend with WebSocket, and pilot FWS module.

---

## Wave 3: AI-Driven Storage Ecosystem
**Status**: Planned

- **Objective**: Position FIP as an AI infrastructure leader.
- **Features**:
  - Compute-Over-Data Module with FVM.
  - Sustainable Storage Incentives with green badges.
  - AI Analytics Dashboard for workload optimization.
  - Decentralized Data Marketplace for AI datasets.
- **Plan**: Integrate FVM compute API, update contracts with zero-knowledge proofs, and launch dataset marketplace beta.

---

## Wave 4: Global Decentralized Cloud Leader (Final Wave)
**Status**: Planned

- **Objective**: Establish FIP as a global leader in decentralized cloud services.
- **Features**:
  - Mainnet Deployment with community validation.
  - Enterprise-Grade SLAs and compute services.
  - Global Community Governance with multi-language support.
  - AI-Powered Storage Optimization Suite.
- **Plan**: Transition to Filecoin Mainnet, conduct security audits, localize UI, and partner with AI/Web3 firms for adoption.

---

## Call to Action

Join us on this journey! Explore the [repository](https://github.com/Wadill/FIP), contribute ideas, and help shape FIP’s future. Let’s build a decentralized storage revolution together!

---

### Description of Visual Appeal

- **Color Harmony**: The pastel palette creates a calming yet professional vibe, reflecting Filecoin’s innovative yet accessible nature.

- **Flow**: The wave-like line symbolizes the fluid, decentralized network, with each milestone building on the last.
- **Scalability**: The design scales from a single leaf to a global map, mirroring FIP’s growth trajectory.

