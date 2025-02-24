const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path'); // Added for static file serving

const app = express();
const port = 5001;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' directory

// API Endpoints and Bearer Token
const BASE_URLS = {
    WEATHER: 'https://cloud.syncloop.com/tenant/1737057817390/packages.PEC_training.AI.Weather_Info.main',
    NEWS: 'https://cloud.syncloop.com/tenant/1737057817390/packages.PEC_training.AI.newsAPI.main',
    STOCK: 'https://cloud.syncloop.com/tenant/1737057817390/packages.PEC_training.AI.stockmarketapi.main',
    SEARCH: 'https://cloud.syncloop.com/tenant/1737057817390/packages.PEC_training.AI.customsearchapi.main'
};

const BEARER_TOKEN = "PYM64C0PLJpZWucGYDZ8S70c3K87blW/kSaCC39Fcw1i6wsmwl5Tug2Hm6DziTr0mtCYEmVDxcLmqr3c/Lxpo6WQhcEj9XRR+sS5s9uKFbFL3AkyC6UI7+gpPHNjguEQbhXaHGS2KFSjGXpJfzL0qI275ri0LcTAC6e628ukcT3tAG+vxC3wjfXFCnKB8HPpmnN2NmF6QqM3ylQCgz2AnB+ZOnZ0Rpi1tFrByynJaXOgOWvd69EqRRG4ljy7au5jCNe+JDFHRRVh5pfF6q/Hgsymu5Jvr1GtcKWJePtysPjPkCBQn738qaYcw5IunFeasT7EzjzB2AhYe2ZTl65jt1kayFLebYMcuMFNVF3WmKZn6AtX+UsYZ95z94I8KoEOH6G00XcJfJd3zaPfzyMcRF4tkWpec5OrIR0lnG1n+5EP2U0SQfEEFRVCRuVndgeGexi+YftOxGTM790X5S9yv6W1HKEjBavx9nfBGLS6oBkF5hyPWGZFYY1b1/lKTRfju78GvgYxKgl1Xm/gI9nSe2NeICNx27lUo6rYmUKcO4qSix8wJyUyEuSSzc1X5DI6tfThJLQIh7tISCsW+fO1bNaLCPjxLzMBdkrhMb8ynkzdBwT1dzA0tAITcmAUHCodnC0Bq2zEhARjG9qxUXRYmAGW97QikHr+rWzDcfe6/rM=";

// Enhanced Reverse Geocoding Function
async function getReverseGeocode(lat, lon) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1&zoom=18`);
        if (!response.ok) throw new Error(`Geocoding failed with status: ${response.status}`);
        const data = await response.json();

        if (!data || !data.address) {
            console.warn('No address data returned for coordinates:', lat, lon);
            return 'Unknown Location';
        }

        // Prioritize specific to general location names
        const address = data.address;
        const locationHierarchy = [
            address.hamlet,           // Very small settlement
            address.village,          // Small village
            address.suburb,           // Neighborhood/suburb
            address.town,             // Town
            address.city,             // City
            address.county,           // County
            address.state,            // State/Province
            address.country           // Country
        ];

        // Find the first non-null/undefined value in the hierarchy
        for (const location of locationHierarchy) {
            if (location) {
                return location;
            }
        }

        // Fallback if no specific location is found
        return data.display_name || 'Unknown Location';
    } catch (error) {
        console.error('Geocoding Error:', error.message);
        return 'Unknown Location';
    }
}

// Weather API Endpoint
app.get('/weather', async (req, res) => {
    const { lt, ln } = req.query;

    if (!lt || !ln) {
        console.error('Missing parameters: lt and ln are required');
        return res.status(400).json({
            status: 'error',
            message: 'Missing required parameters: lt (latitude) and ln (longitude) are required'
        });
    }

    const latitude = parseFloat(lt);
    const longitude = parseFloat(ln);

    if (isNaN(latitude) || isNaN(longitude)) {
        console.error('Invalid latitude or longitude:', lt, ln);
        return res.status(400).json({
            status: 'error',
            message: 'Invalid latitude or longitude values'
        });
    }

    try {
        console.log(`Fetching weather for lat: ${latitude}, lon: ${longitude}`);

        const locationName = await getReverseGeocode(latitude, longitude);
        console.log('Location Name:', locationName);

        const weatherResponse = await fetch(
            `${BASE_URLS.WEATHER}?lt=${latitude}&ln=${longitude}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${BEARER_TOKEN}`,
                    'Accept': 'application/json'
                }
            }
        );

        if (!weatherResponse.ok) {
            const errorText = await weatherResponse.text();
            console.error('Weather API Response Error:', weatherResponse.status, errorText);
            throw new Error(`API responded with status: ${weatherResponse.status} - ${errorText}`);
        }

        const data = await weatherResponse.json();
        console.log('Weather API Response:', data);

        if (data.response?.jsonDoc?.cod !== 200) {
            console.error('Weather API Error Response:', data.response?.jsonDoc);
            throw new Error(data.response?.jsonDoc?.message || 'Failed to fetch weather data');
        }

        if (locationName && data.response?.jsonDoc) {
            data.response.jsonDoc.name = locationName;
        }

        res.json(data);
    } catch (error) {
        console.error('Weather API Error:', error.message);
        res.status(500).json({
            status: 'error',
            message: `Failed to fetch weather data: ${error.message}`
        });
    }
});

// News API Endpoint
app.get('/api/news', async (req, res) => {
    try {
        const response = await axios.get(BASE_URLS.NEWS, {
            headers: {
                'Authorization': `Bearer ${BEARER_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        console.log('News API Response:', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('News API Error:', error.message);
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

// Stock API Endpoint
app.get('/api/stock', async (req, res) => {
    try {
        const response = await axios.get(BASE_URLS.STOCK, {
            headers: {
                'Authorization': `Bearer ${BEARER_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        console.log('Stock API Response:', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Stock API Error:', error.message);
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

// Search API Endpoint
app.get('/api/search', async (req, res) => {
    try {
        const { q } = req.query;
        if (!q) {
            console.error('Search API: Query parameter "q" is required');
            return res.status(400).json({ error: 'Query parameter "q" is required' });
        }
        const response = await axios.get(`${BASE_URLS.SEARCH}?q=${encodeURIComponent(q)}`, {
            headers: {
                'Authorization': `Bearer ${BEARER_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        console.log('Search API Response:', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Search API Error:', error.message);
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});