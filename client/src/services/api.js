import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000'; // adjust if needed

export const fetchStats = async (wallet) =>
  axios.get(`${API_URL}/score/${wallet}`);

export const fetchCarbon = async (wallet) =>
  axios.get(`${API_URL}/carbon/${wallet}`);

export const fetchMarketplace = () =>
  axios.get(`${API_URL}/marketplace`);

export const mintEnergy = async (amount) =>
  axios.post(`${API_URL}/mint`, { kwh: amount });
