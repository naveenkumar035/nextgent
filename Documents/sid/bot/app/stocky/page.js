"use client";

import React, { useState } from 'react';
import axios from 'axios';

function Stocky() {
  const [symbol, setSymbol] = useState('');
  const [interval, setInterval] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAuthorize = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/authorize');
      window.location.href = response.data.url;
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    try {
      const response = await axios.post('http://localhost:5000/api/fetch-data', {
        instrumentKey: symbol,
        interval,
        fromDate: startDate,
        toDate: endDate,
        accessToken
      });

      if (response.status === 200) {
        setResult(response.data);
      } else {
        setError(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <h1>Fetch Historical Data</h1>
      <button onClick={handleAuthorize}>Authorize</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="symbol">Symbol:</label>
          <input type="text" id="symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="interval">Interval:</label>
          <select id="interval" value={interval} onChange={(e) => setInterval(e.target.value)} required>
            <option value="1minute">1 Minute</option>
            <option value="5minute">5 Minutes</option>
            <option value="15minute">15 Minutes</option>
            <option value="1hour">1 Hour</option>
            <option value="1day">1 Day</option>
          </select>
        </div>
        <div>
          <label htmlFor="startDate">Start Date (YYYY-MM-DD):</label>
          <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="endDate">End Date (YYYY-MM-DD):</label>
          <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="accessToken">Access Token:</label>
          <input type="text" id="accessToken" value={accessToken} onChange={(e) => setAccessToken(e.target.value)} required />
        </div>
        <button type="submit">Fetch Data</button>
      </form>
      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
      {error && (
        <p style={{ color: 'red' }}>{error}</p>
      )}
    </div>
  );
}

export default Stocky;
