var button = document.querySelector('.search__button');
var input = document.querySelector('.search__input');

const baseURL = 'https://api.openweathermap.org';
const baseImgURl = 'https://openweathermap.org';
const weatherPath = '/data/2.5/weather?';
const geoPath = '/geo/1.0/direct?';
const imgPath = '/img/wn/';
const imgRes = '@2x.png';

async function getGeo(city) {
    const geoParams = new URLSearchParams({
        q: city,
        limit: '1',
        appid: '456dfb2fe6e3562662d80f493f8d32a4'
    })
    const geoData = await fetch(baseURL + geoPath + geoParams.toString(), { method: 'GET' })
        .then(data => data.json())
        .catch(() => alert('Wrong city name!'));
    return geoData;
}

async function getWeather(geo) {
    const weatherParams = new URLSearchParams({
        lat: geo[0].lat,
        lon: geo[0].lon,
        appid: '456dfb2fe6e3562662d80f493f8d32a4'
    })

    const weatherData = await fetch(baseURL + weatherPath + weatherParams.toString(), { method: 'GET' })
        .then(data => data.json())
        .catch(() => alert('Failed to get the weather!'));
    return weatherData;
}

button.addEventListener("click", async () => {
    const geo = await getGeo(input.value);
    const weather = await getWeather(geo);
    document.getElementById('city').innerHTML = "Weather in " + weather.name;
    document.getElementById('temp').innerHTML = Math.round(weather.main.temp - 273) + '&deg;';
    document.getElementById('disc').innerHTML = weather.weather[0]['description'];
    document.getElementById('image').src = baseImgURl + imgPath + weather.weather[0]['icon'] + imgRes;
    document.getElementById('disc').innerHTML = weather.weather[0]['description'];
    document.getElementById('hum').innerHTML = "Humidity: " + weather.main.humidity + "&#37;";
    document.getElementById('speed').innerHTML = "Wind speeed: " + weather.wind.speed + " km/h";
})