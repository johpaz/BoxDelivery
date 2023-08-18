"use client";

import React, { useState } from 'react';

interface PackageDeliveryProps {
  sender: string;
  recipient: string;
  deliveryStatus: string;
  onUpdateStatus: (status: string) => void;
}

const PackageDelivery: React.FC<PackageDeliveryProps> = ({
  sender,
  recipient,
  deliveryStatus,
  onUpdateStatus,
}) => {
  const [newStatus, setNewStatus] = useState('');

  const handleStatusChange = () => {
    if (newStatus) {
      onUpdateStatus(newStatus);
      setNewStatus('');
    }
  };

  return (
    <div className="package-delivery">
      <h2>Package Delivery Details</h2>
      <p><strong>Sender:</strong> {sender}</p>
      <p><strong>Recipient:</strong> {recipient}</p>
      <p><strong>Current Status:</strong> {deliveryStatus}</p>
      
      <div className="status-update">
        <h3>Update Delivery Status</h3>
        <input
          type="text"
          placeholder="Enter new status"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        />
        <button onClick={handleStatusChange}>Update</button>
      </div>
    </div>
  );
};

export default PackageDelivery;
