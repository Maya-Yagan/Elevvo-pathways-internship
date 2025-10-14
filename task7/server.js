import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());

const API = "https://api.openweathermap.org/data/2.5";
const KEY = process.env.WEATHER_API_KEY;

// weather by city or coords
app.get("/weather", async (req, res) => {
    try {
        const { city, lat, lon, units = "metric" } = req.query;
        let url = "";

        if (city) {
            url = `${API}/weather?q=${encodeURIComponent(city)}&appid=${KEY}&units=${units}`;
        } else if (lat && lon) {
            url = `${API}/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=${units}`;
        } else {
            return res.status(400).json({ error: "Missing city or coordinates" });
        }

        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Weather fetch failed" });
    }
});

// forecast by coords
app.get("/forecast", async (req, res) => {
    try {
        const { lat, lon, units = "metric" } = req.query;
        if (!lat || !lon) return res.status(400).json({ error: "Missing coordinates" });

        const url = `${API}/forecast?lat=${lat}&lon=${lon}&appid=${KEY}&units=${units}`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Forecast fetch failed" });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
