const apiKey = "2e7e02513fff8c0dfcbd636a66d16e8b";

async function getWeatherByCity(){

const city =
document.getElementById("cityInput").value;

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const response = await fetch(url);

const data = await response.json();

displayWeather(data);

}

function getLocationWeather(){

navigator.geolocation.getCurrentPosition(
async(position)=>{

const lat = position.coords.latitude;
const lon = position.coords.longitude;

const url =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

const response = await fetch(url);

const data = await response.json();

displayWeather(data);

});

}

function displayWeather(data){

document.getElementById("weatherResult").innerHTML = `

<h2>${data.name}</h2>

<h3>${data.weather[0].main}</h3>

<p>Temperature:
${data.main.temp} °C</p>

<p>Humidity:
${data.main.humidity}%</p>

<p>Wind Speed:
${data.wind.speed} m/s</p>

`;

}