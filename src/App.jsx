import React, { useState, useEffect } from 'react';
import { fetchRates } from './api';

const App = () => {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');

  useEffect(() => {
    const getRates = async () => {
      const data = await fetchRates(baseCurrency);
      setRates(data.conversion_rates);
    };

    getRates();
  }, [baseCurrency]);

  const convertCurrency = () => {
    return (amount * (rates[targetCurrency] || 1)).toFixed(2);
  };

  return (
    <div className="container mx-auto p-6 flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-4xl font-semibold mb-6 text-slate-400">Currency Converter</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label className="block mb-2 text-lg text-slate-400">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border border-slate-500 p-3 rounded-lg w-full text-gray-900 bg-gray-200 shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg text-slate-400">Base Currency:</label>
          <select
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
            className="border border-slate-500 p-3 rounded-lg w-full text-gray-900 bg-gray-200 shadow-sm"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg text-slate-400">Convert to:</label>
          <select
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
            className="border border-slate-500 p-3 rounded-lg w-full text-gray-900 bg-gray-200 shadow-sm"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="text-2xl font-semibold text-slate-400">
            {amount} {baseCurrency} = {convertCurrency()} {targetCurrency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
