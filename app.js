let day = new Date();
function formatDate(day) {
  let minutes = day.getMinutes();
  let hours = day.getHours();
  let currentDay = day.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[currentDay];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateTime = document.querySelector("#current-day");
currentDateTime.innerHTML = formatDate(day);

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = `${searchInput.value}`;

  let apiKey = "1e34ff4f3f045a566c8e39at1b7beo2f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(function showWeather(response) {
    let currentTemp = Math.round(response.data.temperature.current);
    let headingTemp = document.querySelector("#current-temp");
    headingTemp.innerHTML = `${currentTemp}`;
  });
}

let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", searchCity);
