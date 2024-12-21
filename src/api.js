const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

export const fetchRates = async () => {
  const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`);
  const data = await response.json();
  return data;
};
