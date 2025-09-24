"use client";

import React, { useState } from 'react';

interface StorageData {
  storedBytes: number;
  retrievals: number;
}

const StorageAnalytics: React.FC = () => {
  const [storage] = useState<StorageData>({ storedBytes: 1024, retrievals: 50 }); // Static mock data

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-2">Storage Analytics</h3>
      <div className="bg-pastel-green p-4 rounded-md text-green-800">
        <p>Stored Bytes: {storage.storedBytes}</p>
        <p>Retrievals: {storage.retrievals}</p>
      </div>
    </div>
  );
};

export default StorageAnalytics;