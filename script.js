async function getWeather() {

let city = document.getElementById("city").value;

let apiKey = "850d65c11ab4b9fd73a8ce0efc5be6f2";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let response = await fetch(url);
let data = await response.json();

let iconCode = data.weather[0].icon;
let iconUrl = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";

document.getElementById("weatherResult").innerHTML =
"<h2>" + city + "</h2>" +
"<img src='" + iconUrl + "'>" +
"<p>Temperature: " + data.main.temp + "°C</p>" +
"<p>Weather: " + data.weather[0].description + "</p>" +
"<p>Humidity: " + data.main.humidity + "%</p>";

}