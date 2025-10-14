# Task 7: Real-Time Weather Dashboard

![Screenshot of the project](task7.png)

## Description

This project implements a real-time weather dashboard that fetches and displays current weather data and 3-day forecasts for multiple cities.  
Users can search for cities, use quick city buttons, or allow geolocation to automatically fetch their local weather.  

The dashboard emphasizes a clean, minimal UI and demonstrates API integration, dynamic rendering, and asynchronous operations using HTML, CSS, and JavaScript.

---

## Tools & Technologies Used

- **HTML**: Structure of the page  
- **CSS**: Styling, layout, and responsive design  
- **JavaScript**: Dynamic rendering, DOM manipulation, and asynchronous API calls  
- **OpenWeatherMap API**: Fetch real-time weather and forecast data  
- **Node.js & Express**: Local server for handling API requests  
- **Fetch API**: Communicate with the local server  

---

## Features

- Search for any city to see current weather and 3-day forecast  
- Quick access buttons for popular cities  
- Auto-detect user location for local weather (geolocation)  
- Saved cities persist in local browser storage  
- Responsive layout for desktop and mobile devices  
- Skeleton cards while data is loading  
- Clean, modern, accessible UI  

---

## How It Works

1. Enter a city name in the search input or click a quick city button.  
2. The dashboard fetches current weather and 3-day forecast from the **local server**, which calls the OpenWeatherMap API.  
3. Weather cards display:
   - City name and country  
   - Current temperature and “feels like”  
   - Weather description and icon  
   - Wind speed and humidity  
   - 3-day forecast with icons and temperatures  
4. Users can remove cities from the dashboard, and saved cities persist in the browser.  
5. Clicking Use my location fetches weather for the current coordinates.  

---

## How to Run

1. Clone or download this repository.  
2. IInstall dependencies for the server:
    ```bash
    npm install
3. Obtain your own OpenWeatherMap API key from https://openweathermap.org/api
4. Create a .env file in the project root with the following content:
    ```bash
    WEATHER_API_KEY=YOUR_API_KEY_HERE
5. Start the server:
    ```bash
    node server.js
6. Open `index.html` in your browser.
7. Use the search input, quick city buttons, or geolocation button to view weather information.

***⚠️ Make sure the server is running before attempting to fetch weather data, as the front-end communicates with the local Express server.***

---

Created as part of my front-end learning tasks.