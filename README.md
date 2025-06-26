# 🌱 GreenGrid: Community Energy Sharing Platform

GreenGrid is a peer-to-peer energy sharing platform that allows users to tokenize and share surplus solar energy. It blends IoT smart meters, blockchain (ERC-20), and AI forecasting to reduce carbon footprint and promote clean energy equity.

---

## 🚀 Features

| Feature | Description |
|--------|-------------|
| 🔋 Smart Meter Simulation | Python script simulates solar energy generation & feeds Flask backend |
| 🪙 Blockchain Minting     | ERC-20 GreenToken deployed on Polygon testnet (Mumbai) |
| 💻 React Dashboard        | Clean UI for wallet input, token stats, marketplace & impact |
| 📈 Live Data              | Energy chart + real-time simulation logs (via Flask logs API) |
| 🧠 AI Forecasting         | ForecastBanner predicts future generation using token behavior |
| 🗺️ Microgrid Map         | Visual Leaflet map linking user with buyer & receiver companies |
| 🛒 Token Marketplace      | Redeem GreenTokens for eco-products like credits or gear |

---

## 🛠️ Tech Stack

| Layer       | Technology                        |
|-------------|------------------------------------|
| Frontend    | React.js + Tailwind CSS            |
| Backend     | Flask + Web3.py                    |
| Smart Contract | Solidity + Hardhat              |
| Simulation  | Python (`simulate.py`)             |
| Map Visual  | Leaflet.js                         |
| Forecasting | Mock AI via Flask route            |
| Testnet     | Local Hardhat Network              |

---

## 🧪 Demo Flow

1. Run `simulate.py` to mint energy (every 5s)
2. Tokens are minted to your wallet
3. Dashboard shows GT balance, offset, forecast
4. Logs display recent energy contributions
5. Map shows how energy shared helps Company A (TCS) and bought by Company B (Infosys)
6. Use tokens to redeem carbon credits in Marketplace

---

## 📥 Setup Instructions

### 1. Install Requirements

**Backend**
```bash
cd backend
pip install -r requirements.txt
python server.py
```

**Frontend**
```bash
cd client
npm install
npm start
```

### 2. Simulate Energy Generation
```bash
python simulate.py
```

### 3. Connect Wallet (Metamask)
- Use Polygon Mumbai testnet
- Fund wallet with test MATIC from faucet

---

## 🌍 Deployment Ready
- Can be hosted on **Render/Railway** (backend)
- **Vercel/Netlify** (frontend)
- All logic is real + dynamic

---

## 🧠 Contributors
- **Blockchain & Backend** – `@yourname`
- **Frontend & UX** – `@yourname`
- **Pitch + Architecture** – `@yourname`

---

## 🗣️ Pitch Hook
> "What if your neighbor’s solar panel could power your fridge? GreenGrid makes clean energy sharing as easy as sending a text — local, traceable, and rewarding."

---

## ✅ Status: MVP Complete & Polished
