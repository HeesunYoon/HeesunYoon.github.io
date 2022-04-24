const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");
const icon = document.querySelector("#weather .icon");
const API_KEY = "b5534fcbd801c15ecbb674ac2e92a336";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
      icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].
      icon}@2x.png" alt="weather icon" />`;
      weather.innerText = `${data.main.temp}`;
      city.innerText = `${data.name}/`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);