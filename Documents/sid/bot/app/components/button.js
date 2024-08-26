"use client";

import React, { useState } from "react";

function Button() {
  const [status, setStatus] = useState('');

  const downloadBankStatement = async () => {
    const requestPayload = {
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      accountNumber: '168301513837'
    };

    try {
      const response = await fetch('https://developerportaluat.icicibank.com', {
        method: 'POST',
        headers: {
          'Authorization': `f219f506-1079-4c76-8ea6-439774f96265`, // Replace with your actual API key
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestPayload)
      });

      if (response.ok) {
        const data = await response.json();
        setStatus('Bank statement downloaded successfully.');

        // Create a blob from the JSON response and download it as a file
        const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'bank-statement.json';
        a.click();
        URL.revokeObjectURL(url);
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setStatus(`An unexpected error occurred: ${error.message}`);
    }
  };

  return (
    <div>
      <button className="bg-white text-black rounded p-3" onClick={downloadBankStatement}>
        Download
      </button>
      <p>{status}</p>
    </div>
  );
}

export default Button;
