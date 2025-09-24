import React from 'react';

const IntroPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink to-pastel-blue text-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pastel-blue mb-4">Welcome to FIP</h1>
          <p className="text-lg text-gray-600">Filecoin Incentive Platform - Revolutionizing Decentralized Storage</p>
        </header>

        {/* What It Does Section */}
        <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pastel-pink mb-4">What It Does</h2>
          <p className="text-gray-700 leading-relaxed">
            FIP (Filecoin Incentive Platform) revolutionizes decentralized storage by empowering Filecoin network
            participants with a user-friendly dashboard to manage, store, and retrieve data efficiently. It offers
            real-time storage analytics, seamless FIL payments via Filecoin Pay, warm storage capabilities through
            FilecoinWarmStorageService, and blazing-fast content delivery with FilCDN, all integrated into a
            pastel-themed interface. Miners and storage providers can track their contributions, earn incentives, and
            engage with a community-driven ecosystem, leveraging Citrea’s zk-rollup-inspired efficiency adapted for
            Filecoin. The platform fosters a sustainable storage network, rewarding users with badges and analytics
            while ensuring data reliability and accessibility.
          </p>
        </section>

        {/* The Problem It Solves Section */}
        <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pastel-green mb-4">The Problem It Solves</h2>
          <p className="text-gray-700 leading-relaxed">
            FIP addresses the challenge of transforming Filecoin from a cold-archive storage solution into a dynamic,
            on-chain cloud service ecosystem. It tackles the lack of user-friendly tools for storage providers to
            monitor and optimize their data deals, the complexity of integrating payment rails for services, and the
            slow retrieval times that hinder adoption. By solving these, FIP enhances the economic incentives for
            long-term data storage, bridges the gap between decentralized storage and practical cloud applications,
            and promotes scalability and trust in Filecoin’s peer-to-peer network, making it a viable alternative to
            centralized cloud providers.
          </p>
        </section>

        {/* Challenges I Ran Into Section */}
        <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pastel-blue mb-4">Challenges I Ran Into</h2>
          <p className="text-gray-700 leading-relaxed">
            Integrating Filecoin Onchain Cloud services like FilecoinWarmStorageService and FilCDN proved challenging
            due to limited documentation and mock API availability, requiring creative workarounds with placeholder
            endpoints. Adapting the Citrea zk-rollup-inspired architecture to Filecoin’s unique consensus and storage
            mechanisms demanded significant refactoring of smart contracts and backend logic. Ensuring real-time
            updates with Stork-like low-latency processing was tricky without official SDKs, leading to manual
            simulation. Additionally, aligning the pastel-themed UI with Filecoin’s branding while maintaining
            functionality across testnets posed design and compatibility hurdles that required iterative testing.
          </p>
        </section>

        {/* Technologies I Used Section */}
        <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pastel-pink mb-4">Technologies I Used</h2>
          <p className="text-gray-700 leading-relaxed">
            The build leverages Next.js for a fast, SEO-friendly frontend, paired with Tailwind CSS for a responsive,
            pastel-themed UI and TypeScript for robust type safety. Axios facilitates API calls to mock Redstone-like
            price feeds and storage analytics, while Web3.js and Ethers.js connect to Filecoin Calibration Testnet for
            smart contract interactions. The backend is built with Node.js and Express, using Cors for cross-origin
            support. Smart contracts are developed in Solidity with Hardhat for deployment, and a mock Synapse SDK
            (TypeScript) simulates Filecoin Onchain Cloud integrations, laying the groundwork for future official SDK
            use.
          </p>
        </section>

        {/* How We Built It Section */}
        <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pastel-green mb-4">How We Built It</h2>
          <p className="text-gray-700 leading-relaxed">
            We started by re-routing the MIP (Miners' Incentive Platform) codebase, retaining its UI structure and
            adapting it to FIP’s storage focus. The frontend was crafted with Next.js, using Tailwind CSS to design a
            card-based dashboard, while TypeScript ensured type consistency across components. The backend was set up
            with Node.js to serve mock data for prices and storage analytics, linked to a Solidity smart contract
            deployed via Hardhat on Filecoin Testnet. We iteratively integrated mock Synapse SDK functions for storage
            and payment features, testing UI responsiveness and contract interactions manually due to limited Filecoin
            Onchain Cloud APIs, and documented each step for scalability.
          </p>
        </section>

        {/* Call to Action Button */}
        <div className="text-center mt-10">
          <a
            href="/dashboard"
            className="bg-pastel-blue text-white px-6 py-3 rounded-md hover:bg-pastel-pink transition duration-300"
          >
            Explore Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;