"use client";

import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-2">Portfolio</h3>
      <div className="bg-pastel-green p-4 rounded-md text-green-800">
        <p>FIL Value: $5.50 (Mock)</p>
      </div>
    </div>
  );
};

export default Portfolio;