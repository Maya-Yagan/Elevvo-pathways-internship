/*
  Weather Dashboard JS
*/
const units = 'metric'; // or 'imperial'
const cityListEl = document.getElementById('cityList');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const locBtn = document.getElementById('locBtn');
const quickCitiesEl = document.getElementById('quickCities');
const savedListEl = document.getElementById('savedList');
const alertEl = document.getElementById('alert');
const timeNowEl = document.getElementById('timeNow');

const QUICK = ['Istanbul', 'London', 'New York', 'Tokyo', 'Moscow', 'São Paulo'];
let savedCities = loadSavedCities();

// update clock
function updateClock() {
    const now = new Date();
    timeNowEl.textContent = now.toLocaleString();
}
setInterval(updateClock, 1000);
updateClock();

// render quick chips
function renderQuick() {
    quickCitiesEl.innerHTML = '';
    QUICK.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'chip';
        btn.textContent = c;
        btn.onclick = () => addCityByName(c);
        quickCitiesEl.appendChild(btn);
    });
}
renderQuick();

function showAlert(msg, timeout = 4000) {
    alertEl.textContent = msg;
    if (timeout) {
        setTimeout(() => { if (alertEl.textContent === msg) alertEl.textContent = ''; }, timeout);
    }
}

/* ---------- Storage ---------- */
function loadSavedCities() {
    try {
        const raw = localStorage.getItem('weather_saved') || '[]';
        return JSON.parse(raw);
    } catch (e) { return []; }
}
function saveSavedCities() {
    try {
        localStorage.setItem('weather_saved', JSON.stringify(savedCities));
        renderSaved();
    } catch (e) { }
}
function renderSaved() {
    savedListEl.innerHTML = savedCities.length ? savedCities.join(', ') : 'No saved cities';
}

/* ---------- Helpers ---------- */
function kToC(k) { return k - 273.15; }
function iconUrl(iconCode) { return `https://openweathermap.org/img/wn/${iconCode}@2x.png`; }

/* Picks one forecast item per next day (closest to 12:00 local time) */
function pickDailyForecasts(forecastList, timezoneOffsetSeconds) {
    // forecastList: array of items with dt (unix UTC) and main.temp and weather[]
    // timezoneOffsetSeconds: seconds to add to UTC to get local time (from city)
    const byDay = {};
    for (const item of forecastList) {
        const localMs = (item.dt + timezoneOffsetSeconds) * 1000;
        const d = new Date(localMs);
        // use YYYY-MM-DD as key
        const key = d.getUTCFullYear() + '-' + String(d.getUTCMonth() + 1).padStart(2, '0') + '-' + String(d.getUTCDate()).padStart(2, '0');
        if (!byDay[key]) byDay[key] = [];
        byDay[key].push({ item, hour: d.getUTCHours() });
    }
    // produce sorted keys (today excluded)
    const keys = Object.keys(byDay).sort();
    // pick entries for next 3 days (skip current day if less than 12:00 left)
    const picks = [];
    for (let i = 0; i < keys.length && picks.length < 3; i++) {
        const k = keys[i];
        const candidates = byDay[k];
        // pick the candidate with hour closest to 12 (noon)
        candidates.sort((a, b) => Math.abs(a.hour - 12) - Math.abs(b.hour - 12));
        picks.push(candidates[0].item);
    }
    return picks;
}

/* ---------- API calls ---------- */
async function fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok) {
        const text = await res.text();
        throw new Error('Network error: ' + res.status + ' — ' + text);
    }
    return res.json();
}

async function getCurrentWeatherByCity(city) {
    const url = `http://localhost:3000/weather?city=${encodeURIComponent(city)}&units=${units}`;
    return fetchJson(url);
}

async function getCurrentWeatherByCoords(lat, lon) {
    const url = `http://localhost:3000/weather?lat=${lat}&lon=${lon}&units=${units}`;
    return fetchJson(url);
}

async function getForecastByCoords(lat, lon) {
    const url = `http://localhost:3000/forecast?lat=${lat}&lon=${lon}&units=${units}`;
    return fetchJson(url);
}

/* ---------- Render ---------- */

function createSkeletonCard() {
    const c = document.createElement('div');
    c.className = 'city-card';
    c.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center">
      <div style="width:60%"><div class="skeleton" style="height:18px;width:70%"></div><div class="skeleton" style="height:12px;width:40%;margin-top:8px"></div></div>
      <div style="width:30%"><div class="skeleton" style="height:46px;width:46px;border-radius:8px"></div></div>
    </div>
    <div class="skeleton" style="height:12px;width:60%"></div>
    <div style="display:flex;gap:8px;margin-top:14px">
      <div class="skeleton" style="height:46px;width:66px;border-radius:8px"></div>
      <div class="skeleton" style="height:46px;width:66px;border-radius:8px"></div>
      <div class="skeleton" style="height:46px;width:66px;border-radius:8px"></div>
    </div>
  `;
    return c;
}

function addCityCardPlaceholder() {
    const sk = createSkeletonCard();
    cityListEl.prepend(sk);
    return sk;
}

function renderCityCard(data, forecastItems) {
    /* data: current weather object
       forecastItems: array of forecast items (3 items for 3 days)
    */
    const card = document.createElement('article');
    card.className = 'city-card';
    card.setAttribute('data-id', data.id);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.title = 'Remove city';
    removeBtn.textContent = '✕';
    removeBtn.onclick = () => {
        card.remove();
        savedCities = savedCities.filter(c => c.toLowerCase() !== data.name.toLowerCase());
        saveSavedCities();
    };
    card.appendChild(removeBtn);

    const head = document.createElement('div');
    head.className = 'city-head';

    const left = document.createElement('div');
    left.innerHTML = `<div class="city-name">${data.name}, ${data.sys.country}</div>
                    <div class="weather-desc">${capitalize(data.weather[0].description)}</div>`;

    const right = document.createElement('div', {});
    right.style.textAlign = 'right';
    right.innerHTML = `<div class="temp">${Math.round(data.main.temp)}°</div>
                     <div style="font-size:12px;color:var(--muted)">${Math.round(data.main.feels_like)}° feels</div>`;

    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = iconUrl(data.weather[0].icon);
    icon.alt = data.weather[0].description;
    icon.style.marginLeft = '12px';

    right.appendChild(icon);

    head.appendChild(left);
    head.appendChild(right);

    card.appendChild(head);

    // extra info row
    const info = document.createElement('div');
    info.style.display = 'flex';
    info.style.justifyContent = 'space-between';
    info.style.alignItems = 'center';
    info.style.gap = '12px';
    info.style.marginTop = '8px';
    info.innerHTML = `
    <div class="muted" style="font-size:13px">${data.wind?.speed ?? '-'} m/s · Hum ${data.main.humidity}%</div>
    <div class="muted" style="font-size:12px">Updated ${new Date(data.dt * 1000).toLocaleTimeString()}</div>
  `;
    card.appendChild(info);

    // forecast
    const forecastRow = document.createElement('div');
    forecastRow.className = 'forecast-row';
    for (const f of forecastItems) {
        const localDate = new Date((f.dt + data.timezone) * 1000);
        const dayName = localDate.toLocaleDateString(undefined, { weekday: 'short' });
        const dayBox = document.createElement('div');
        dayBox.className = 'day';
        dayBox.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center">
        <img class="icon" src="${iconUrl(f.weather[0].icon)}" alt="${f.weather[0].description}" style="width:36px;height:36px">
      </div>
      <div style="font-weight:700">${Math.round(f.main.temp)}°</div>
      <small>${dayName}</small>
    `;
        forecastRow.appendChild(dayBox);
    }
    card.appendChild(forecastRow);

    return card;
}

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ---------- Orchestration: Add / Fetch / Render ---------- */

async function addCityByName(cityName) {
    if (!cityName || !cityName.trim()) return;
    const city = cityName.trim();
    searchInput.value = '';
    // show skeleton
    const placeholder = addCityCardPlaceholder();
    try {
        const cur = await getCurrentWeatherByCity(city);
        // get forecast by coords
        const fc = await getForecastByCoords(cur.coord.lat, cur.coord.lon);
        const picks = pickDailyForecasts(fc.list, fc.city.timezone);
        // remove placeholder and show card
        placeholder.remove();
        const card = renderCityCard(cur, picks);
        cityListEl.prepend(card);
        // save
        if (!savedCities.find(c => c.toLowerCase() === cur.name.toLowerCase())) {
            savedCities.unshift(cur.name);
            if (savedCities.length > 10) savedCities.pop();
            saveSavedCities();
        }
    } catch (err) {
        placeholder.remove();
        showAlert('Could not fetch city: ' + (err.message || err));
        console.error(err);
    }
}

async function addCityByCoords(lat, lon, label) {
    const placeholder = addCityCardPlaceholder();
    try {
        const cur = await getCurrentWeatherByCoords(lat, lon);
        const fc = await getForecastByCoords(lat, lon);
        const picks = pickDailyForecasts(fc.list, fc.city.timezone);
        placeholder.remove();
        const card = renderCityCard(cur, picks);
        card.querySelector('.city-name').textContent = label ? `${label} (${cur.name})` : `${cur.name}, ${cur.sys.country}`;
        cityListEl.prepend(card);
        // savedCities - don't auto-save location unless user chooses to
    } catch (err) {
        placeholder.remove();
        showAlert('Could not fetch location weather: ' + (err.message || err));
        console.error(err);
    }
}

/* ---------- Geolocation ---------- */
async function tryUseGeolocation() {
    if (!navigator.geolocation) {
        showAlert('Geolocation not supported by your browser.');
        return;
    }
    showAlert('Requesting location…');
    navigator.geolocation.getCurrentPosition(async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        showAlert('Location found — fetching weather...', 2000);
        await addCityByCoords(lat, lon, 'Your location');
    }, (err) => {
        showAlert('Location denied or not available.');
        console.warn(err);
    }, { timeout: 12000 });
}

/* ---------- Events ---------- */

searchBtn.addEventListener('click', () => addCityByName(searchInput.value));
searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') addCityByName(searchInput.value); });
locBtn.addEventListener('click', tryUseGeolocation);

// Load saved cities on start
(async function init() {
    renderSaved();
    // Load saved cities (up to 4) and show skeletons while loading
    if (savedCities.length) {
        for (const c of savedCities.slice(0, 5)) {
            await addCityByName(c);
        }
    } else {
        // nothing saved: auto-load 3 quick cities
        for (const c of QUICK.slice(0, 3)) {
            await addCityByName(c);
        }
    }

    // attempt to auto-detect user's city once - non-blocking
    try {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (pos) => {
                // only add if user allows and it isn't duplicate of an existing card
                const lat = pos.coords.latitude, lon = pos.coords.longitude;
                // Quick check: do we already have a card with same coords? skip
                await addCityByCoords(lat, lon, 'Your location');
            }, () => {/* ignore */ }, { timeout: 7000 });
        }
    } catch (e) { }
})();

/* ---------- Small accessibility improvements ---------- */
// Keyboard accessibility for chips
quickCitiesEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('chip')) {
        addCityByName(e.target.textContent);
    }
});

/* ---------- Developer guard: API key check ---------- */
(function checkApiKey() {
    if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE' || API_KEY.trim().length < 10) {
        showAlert('⚠️ Replace `YOUR_API_KEY_HERE` with your OpenWeatherMap API key in the file.', 100000);
    }
})();