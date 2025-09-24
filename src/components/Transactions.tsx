"use client";

import React, { useState } from 'react';

const Transactions: React.FC = () => {
  const [amount] = useState(0); // Static state for demo

  const handlePay = () => {
    alert(`Processing ${amount} USDFC payment via Filecoin Pay (Demo Mode)`); // Mock action
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-2">Transactions</h3>
      <div className="bg-pastel-blue p-4 rounded-md text-pastel-blue">
        <input
          type="number"
          value={amount}
          onChange={(e) => console.log(`Input: ${e.target.value}`)} // Mock interaction
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter USDFC amount"
          disabled
        />
        <button
          onClick={handlePay}
          className="mt-4 w-full bg-pastel-pink text-white px-4 py-2 rounded-md hover:bg-pink-600"
          disabled
        >
          Pay with Filecoin Pay
        </button>
      </div>
    </div>
  );
};

export default Transactions;