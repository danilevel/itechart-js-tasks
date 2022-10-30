var button = document.querySelector('.search__button');
var input = document.querySelector('.search__input');

async function getWeather(city) {
    const geoData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=456dfb2fe6e3562662d80f493f8d32a4`)
        .then(data => data.json())
        .catch(err => alert("Wrong city name!"));

    const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=456dfb2fe6e3562662d80f493f8d32a4`)
        .then(data => data.json())
        .catch(err => alert("Wrong city name!"));
    return weatherData;
}

button.addEventListener("click", async () => {
    const weatherData = await getWeather(input.value);
    document.getElementById('city').innerHTML = "Weather in " + weatherData.name;
    document.getElementById('temp').innerHTML = Math.round(weatherData.main.temp - 273) + '&deg;';
    document.getElementById('disc').innerHTML = weatherData.weather[0]['description'];
    document.getElementById('image').src = `https://openweathermap.org/img/wn/${weatherData.weather[0]['icon']}@2x.png`;
    document.getElementById('disc').innerHTML = weatherData.weather[0]['description'];
    document.getElementById('hum').innerHTML = "Humidity: " + weatherData.main.humidity + "&#37;";
    document.getElementById('speed').innerHTML = "Wind speeed: " + weatherData.wind.speed + " km/h";
})