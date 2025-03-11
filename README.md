![ASTRA AI Logo](https://github.com/coderiders22/ASTRA-AI/blob/b6f15bf748a22b457922e0b4ffbc46fbdd71c971/favi.png)

# ASTRA AI - Universal Intelligence Nexus 🌍🤖

ASTRA AI is an advanced AI-powered voice assistant that provides real-time weather, news, stock prices, and web search results using **custom APIs hosted on Syncloop** and deployed on **Koyeb**. With voice commands, text-based searches, and an interactive map, ASTRA AI ensures a futuristic and user-friendly experience.

## 🚀 Live Application Demo
[**Explore ASTRA AI**](https://astra.koyeb.app/)

---

## 📌 Features
- **Voice Interaction:** Execute commands like *“weather in Tokyo”* using the browser’s **SpeechRecognition API**.
- **Location-Specific News:** Fetches news for any map-clicked or voice-specified location using **Google Custom Search API**.
- **Multi-API Integration:** Weather, news, stocks, and search functionalities powered by **Syncloop APIs**.
- **Interactive Map:** Click on a location via **Leaflet.js** to retrieve relevant data.
- **Futuristic UI:** A **neon-themed**, animated interface for an immersive experience.

---

## 🛠 Tech Stack

### **Frontend**
- **HTML5, CSS3, JavaScript (ES6+)**
- **Leaflet.js** (Interactive Map)
- **Particles.js** (Background Animation)
- **Font Awesome** (UI Enhancements)

### **Backend**
- **Node.js, Express.js** (Server)
- **Axios** (API Requests Handling)
- **CORS** (Cross-Origin Resource Sharing)

### **APIs Used**
- **Syncloop APIs:** Weather, News, Stock, Custom Search
- **Google Custom Search API** (for location-specific news)
- **Nominatim API** (Geocoding & Reverse Geocoding)
- **SpeechRecognition API** (Voice-to-Text)

---

## 📂 Installation & Setup (Run Locally)

### **Prerequisites** 📋
- Node.js (v12 or higher)
- npm (Node Package Manager)
- A modern web browser

### **Clone the Repository**
```bash
git clone https://github.com/coderiders22/ASTRA-AI.git
```

### **Install Dependencies**
```bash
npm install
npm install express cors axios
```

### **Run the Server**
```bash
node server.js
```

### **Open in Browser** 🌐
```plaintext
http://localhost:5001
```

### **Add Your Syncloop API Token** 🔑
In `server.js`, update the following line:
```javascript
const BEARER_TOKEN = 'Replace this with your Syncloop API token';
```

---

## 📌 API Endpoints

### **Weather API** 🌤️
**GET `/Weather_Info`**
- Parameters:
  - `lt` (Latitude)
  - `ln` (Longitude)
- Returns: Weather data from Syncloop API

### **News API** 📰
**GET `/newsAPI`**
- Parameters:
  - `location`: City or Country name
- Returns: Latest news for the specified location

### **Stock Market API** 📈
**GET `/stockmarketapi`**
- Parameters:
  - `symbol`: Stock ticker (e.g., IBM, TSLA)
- Returns: Current stock price

### **Custom Search API** 🔍
**GET `/customsearchapi`**
- Parameters:
  - `query`: Search term
- Returns: Web search results

---

## 🛠 Deployment
This project is deployed on **Koyeb**. To deploy your own instance:
1. **Push your code** to GitHub.
2. **Create an account** on [Koyeb](https://www.koyeb.com/).
3. **Deploy the repository** with Node.js as the runtime.
4. **Ensure correct API keys & environment variables**.

---

## 📌 Contributing
Contributions are welcome! Feel free to **fork** the repository, make improvements, and submit a **pull request**. 

---

📌 **For Source Code :** [GitHub Repository](https://github.com/coderiders22/ASTRA-AI)

---

🎤 **Experience the Future of AI-Powered Assistance with ASTRA AI!** 🚀
