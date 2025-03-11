# ASTRA AI

ASTRA AI is an intelligent dashboard that provides real-time weather updates, news, stock market insights, and custom searches. It is built using **Express.js**, **Axios**, and **OpenStreetMap API** for reverse geocoding.

## Features
- 🌦 Weather updates based on latitude and longitude
- 📰 Latest news fetched from a news API
- 📈 Stock market data retrieval
- 🔍 Custom search functionality

## Tech Stack
- **Backend**: Node.js, Express.js
- **APIs Used**:
  - Weather API
  - News API
  - Stock Market API
  - Custom Search API
- **Additional Services**: OpenStreetMap (Reverse Geocoding)

## Project Setup and Running on Localhost

### Prerequisites
Ensure you have **Node.js** installed on your system.

### Installation Steps
1. Clone the repository:
   ```bash
   git clone <https://github.com/coderiders22/ASTRA-AI>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Open your browser and visit:
   ```
   http://localhost:5001
   ```

## Folder Structure
```
ASTRA-AI/
│── public/         # Contains static HTML files
│── server.js       # Main Express.js backend server
│── package.json    # Node.js package configuration
```

## API Endpoints
- **Weather API:** `/weather?lt=<latitude>&ln=<longitude>`
- **News API:** `/api/news`
- **Stock Market API:** `/api/stock`
- **Custom Search API:** `/api/search?q=<query>`

## Deployment
This project can be deployed using services like **Render, Vercel, or Heroku** for backend hosting.

---
✨ Enjoy real-time updates with ASTRA AI! 🚀
