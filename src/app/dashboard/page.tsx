"use client";

import React, { useState, useEffect } from 'react';
import Dashboard from '../../components/Dashboard';
import { Synapse, RPC_URLS } from '@filoz/synapse-sdk';
import { ethers } from 'ethers';

export default function DashboardPage() {
  const [mockDataSets, setMockDataSets] = useState<number[]>([]);
  const [mockBalance, setMockBalance] = useState<string>('100.00');

  useEffect(() => {
    const initMockSynapse = async () => {
      const mockSynapse = await Synapse.create({
        privateKey: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef', // Mock private key
        rpcURL: RPC_URLS.calibration.websocket, // Calibration Testnet
      });
      // Simulate data sets and balance
      setMockDataSets([1, 2, 3]); // Mock Data Set IDs
      const balance = await mockSynapse.payments.balance(); // Mock balance
      setMockBalance(ethers.formatUnits(balance, 18)); // Format as USDFC
    };
    initMockSynapse();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mb-6 text-pastel-blue">FIP Dashboard</h1>
      <p className="text-center mb-6 text-gray-600">USDFC Balance: {mockBalance} | Data Sets: {mockDataSets.length}</p>
      <Dashboard />
    </div>
  );
}