function showFormTemp(response) {
  let tempNumber = document.querySelector(".degrees");
  let temp = Math.round(response.data.main.temp);
  tempNumber.innerHTML = `${temp}°`;
}

function enterCity(event) {
  event.preventDefault();
  console.log(event);
  let cityName = document.querySelector("#type-city");
  let city = document.querySelector("#replace");
  let apiKey = "29db418d254189011335f04392e3dfc8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`;
  city.innerHTML = cityName.value;
  axios.get(apiUrl).then(showFormTemp);
}
let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentTime = new Date();
let currentHour = currentTime.getHours();
let currentDay = weekday[currentTime.getDay()];
let currentMin = currentTime.getMinutes();
let textHour = document.querySelector("p");
textHour.innerHTML = `${currentDay} ${currentHour}:${currentMin}`;
let form = document.querySelector(".city");
form.addEventListener("submit", enterCity);

//button current Location & current Weather
function getTemp(response) {
  let place = document.querySelector("#replace");
  let city = response.data.name;
  let tempNumber = document.querySelector(".degrees");
  let temp = Math.round(response.data.main.temp);
  tempNumber.innerHTML = `${temp}°`;
  place.innerHTML = city;
}

//get myLocation
function showCoordinates(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "29db418d254189011335f04392e3dfc8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  console.log(lat);
  console.log(lon);
  axios.get(apiUrl).then(getTemp);
}

function navigatorr(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCoordinates);
}

let formn = document.querySelector("#type-city");
formn.addEventListener("submit", enterCity);

let button = document.querySelector("button");
button.addEventListener("click", navigatorr);
