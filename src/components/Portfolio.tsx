"use client";

import React, { useState } from 'react';

interface PriceData {
  FIL: number;
}

const Portfolio: React.FC = () => {
  const [prices] = useState<PriceData>({ FIL: 5.50 }); // Static mock data

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-2">Portfolio</h3>
      <div className="bg-pastel-green p-4 rounded-md text-green-800">
        <p>FIL: ${prices.FIL.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Portfolio;