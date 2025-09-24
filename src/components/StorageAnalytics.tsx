"use client";

import React from 'react';

const StorageAnalytics: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-2">Storage Analytics</h3>
      <div className="bg-pastel-green p-4 rounded-md text-green-800">
        <p>Stored Bytes: 1024 (Mock Data Set)</p>
        <p>Retrievals: 50 (Mock)</p>
      </div>
    </div>
  );
};

export default StorageAnalytics;