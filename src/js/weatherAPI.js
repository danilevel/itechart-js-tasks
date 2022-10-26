var button = document.querySelector('.search__button');
var input = document.querySelector('.search__input');

button.addEventListener("click", () => {
    
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=1&appid=456dfb2fe6e3562662d80f493f8d32a4`)
        .then(response => response.json())
        .then(data => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=456dfb2fe6e3562662d80f493f8d32a4`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.getElementById('city').innerHTML = "Weather in " + data.name;
                document.getElementById('temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.getElementById('disc').innerHTML = data.weather[0]['description'];
                document.getElementById('image').src = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`;
                document.getElementById('disc').innerHTML = data.weather[0]['description'];
                document.getElementById('hum').innerHTML = "Humidity: " + data.main.humidity + "&#37;";
                document.getElementById('speed').innerHTML = "Wind speeed: " + data.wind.speed + " km/h";
            });
        })
        .catch(err => alert("Wrong city name!"));

    
})