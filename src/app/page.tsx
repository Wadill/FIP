"use client";

import React, { useState, useEffect } from 'react';
import { Synapse, RPC_URLS } from '@filoz/synapse-sdk';
import { ethers } from 'ethers';

const IntroPage: React.FC = () => {
  const [mockPieceCid, setMockPieceCid] = useState<string | null>(null);

  // Mock Synapse initialization (static simulation)
  useEffect(() => {
    const initMockSynapse = async () => {
      const mockSynapse = await Synapse.create({
        privateKey: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef', // Mock private key
        rpcURL: RPC_URLS.calibration.websocket, // Calibration Testnet
      });
      // Simulate an upload
      const mockData = new TextEncoder().encode('🚀 Welcome to FIP on Filecoin!');
      const result = await mockSynapse.storage.upload(mockData); // Mock upload
      setMockPieceCid(result.pieceCid.toString());
    };
    initMockSynapse();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink to-pastel-blue text-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pastel-blue mb-4">Welcome to FIP</h1>
          <p className="text-lg text-gray-600">Filecoin Incentive Platform - Revolutionizing Decentralized Storage</p>
        </header>

        <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pastel-pink mb-4">What It Does</h2>
          <p className="text-gray-700 leading-relaxed">
            FIP (Filecoin Incentive Platform) leverages the Filecoin Synapse SDK to revolutionize decentralized storage,
            empowering participants with a dashboard to manage, store, and retrieve data via Warm Storage and FilCDN.
            It simulates FIL payments with Filecoin Pay, offers real-time analytics, and fosters a sustainable ecosystem
            with badges, using Citrea’s zk-rollup-inspired efficiency. Mock PieceCID: {mockPieceCid || 'Loading...'}
          </p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pastel-green mb-4">The Problem It Solves</h2>
          <p className="text-gray-700 leading-relaxed">
            FIP transforms Filecoin from cold-archive storage into a dynamic cloud ecosystem, addressing user-unfriendly
            tools, complex payment integration, and slow retrievals. It enhances incentives, bridges decentralized
            storage with cloud applications, and builds trust in Filecoin’s peer-to-peer network.
          </p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pastel-blue mb-4">Challenges I Ran Into</h2>
          <p className="text-gray-700 leading-relaxed">
            Integrating Synapse SDK’s Warm Storage and FilCDN faced documentation gaps, requiring mock endpoints.
            Adapting Citrea’s zk-rollup to Filecoin’s consensus needed contract refactoring. Real-time updates lacked
            SDKs, leading to manual simulation, and aligning the UI with Filecoin branding posed design challenges.
          </p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pastel-pink mb-4">Technologies I Used</h2>
          <p className="text-gray-700 leading-relaxed">
            Built with Next.js, Tailwind CSS, and TypeScript, FIP uses Synapse SDK (v0.24.0+) with ethers.js for
            Filecoin Calibration Testnet interactions. It mocks Node.js/Express backend, Solidity/Hardhat contracts,
            and Synapse’s Warm Storage and Payments services.
          </p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pastel-green mb-4">How We Built It</h2>
          <p className="text-gray-700 leading-relaxed">
            We adapted the MIP codebase to FIP, using Next.js and Tailwind for a card-based UI. Synapse SDK mocks
            simulated storage uploads and payment rails on Testnet with Hardhat-deployed contracts, tested manually
            due to limited APIs, ensuring scalability for future integration.
          </p>
        </section>

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