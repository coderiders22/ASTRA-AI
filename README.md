# ASTRA AI - Universal Intelligence Nexus

## Description
The **ASTRA AI - Universal Intelligence Nexus** is an advanced AI-powered voice assistant designed to deliver real-time information on weather, news, stock prices, and web search results. Developed as an internship project, this web application integrates custom APIs built on the **Syncloop** platform and is hosted on **Koyeb** for seamless performance. 

It supports **voice commands, text-based searches, and interactive map clicks**, with a standout feature: **location-specific news** retrieved using latitude and longitude coordinates via the **Google Custom Search API**.

## Key Features
- **Voice Interaction:** Users can speak commands (e.g., “weather in Tokyo,” “news in Paris”) using the browser’s **SpeechRecognition API**.
- **Location-Specific News:** Fetches news for any map-clicked location or voice-specified place by integrating **reverse geocoding (Nominatim)** and **Google Search API**.
- **Multi-API Integration:** Combines **weather, news, stock, and search** data from **Syncloop-hosted APIs**.
- **Interactive Map:** Allows users to click on a **Leaflet.js** map to retrieve weather and news for specific coordinates.
- **Futuristic UI:** Features a **neon-themed, responsive design** with **particle animations** for an engaging experience.

## Tech Stack
### Frontend
- **HTML5** - Core structure of the web application.
- **CSS3** - Styling with custom variables, neon animations, and responsive media queries.
- **JavaScript (ES6+)** - Logic for API calls, intent detection, and dynamic rendering.
- **Leaflet.js** - Interactive OpenStreetMap integration for location-based features.
- **Particles.js** - Background particle animations for a futuristic aesthetic.
- **Font Awesome** - Icons for enhanced UI elements.

### Backend
- **Node.js** - Server-side runtime environment.
- **Express.js** - Framework for proxying API requests and serving static files.
- **Axios** - HTTP client for making API calls to Syncloop services.
- **CORS** - Middleware for cross-origin resource sharing.

### APIs
#### Syncloop Platform (Custom APIs):
- **Weather API**: Integrates OpenWeather data.
- **News API**: Fetches general news.
- **Stock Market API**: Provides stock data (e.g., IBM).
- **Search API**: Uses Google Custom Search for web and location-specific news.
- **Nominatim (OpenStreetMap)**: Geocoding and reverse geocoding for location handling.
- **SpeechRecognition API**: Browser-based speech-to-text conversion.

### Tools & Deployment
- **Syncloop** - Platform for creating and hosting custom APIs.
- **Koyeb** - Serverless hosting for backend and frontend.
- **GitHub** - Version control and source code repository.

## Approach
### 1. Requirement Analysis
- Defined core features: **voice input, intent detection, API integration** for weather, news, stocks, and search.
- Added **location-specific news** and **map interaction** as key features.

### 2. API Development on Syncloop
- Built **custom APIs** for:
  - **Weather** - Integrated OpenWeather API.
  - **News** - Connected to a news source for general headlines.
  - **Stock** - Linked to Alpha Vantage for real-time stock data.
  - **Search** - Used Google Custom Search for web queries and location-specific news.
- Configured APIs with a **bearer token** for secure access.

### 3. Frontend Development
- Designed a **neon-themed UI** with **Particles.js** animations and **CSS effects**.
- Integrated **Leaflet.js** for an **interactive map**.
- Implemented **SpeechRecognition API** for **voice commands**.
- Ensured **responsiveness** across devices.

### 4. Backend Development
- Created an **Express.js server** to **proxy Syncloop API requests**.
- Hosted on **Koyeb**.

### 5. Logic Implementation
- Developed **intent detection** to route voice/text inputs to appropriate APIs.
- Used **Nominatim for geocoding and reverse geocoding** to support map and voice features.

### 6. Testing & Debugging
- Tested **voice commands, map clicks, and search inputs** across browsers.
- Fixed **Leaflet.js and Particles.js CDN loading issues**.
- Addressed **Koyeb 404 errors** by verifying **deployment health and proper configurations**.

### 7. Deployment
- Deployed the **Express.js server and frontend** on **Koyeb**.
- Verified **API connectivity** between **frontend, Koyeb, and Syncloop**.

## Final Summary
The **ASTRA AI - Universal Intelligence Nexus** successfully delivers a **voice-enabled assistant** with real-time **weather, news, stock, and search capabilities**. Its standout feature—**location-specific news**—leverages **Google Custom Search with latitude/longitude inputs**, enhanced by **Nominatim geocoding**. The futuristic **UI, interactive map, and voice interaction** make it an **impressive live demo** for AI-driven applications.

## Live Demo & Repository
🔗 **Live Demo:** [ASTRA AI Deployment](https://astra-ai.koyeb.app)  
📂 **GitHub Repository:** [ASTRA AI GitHub](https://github.com/coderiders22/ASTRA-AI)
