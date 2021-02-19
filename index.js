"use strict";

//create variable for calling API URL

const weatherURL =
  "http://api.openweathermap.org/data/2.5/weather?&units=imperial&zip=";

//create variable for API Key
const apiKey = "bfb8a7a5a080b6de3711a504201eb15f";

//get data from API

async function getWeather() {
  const response = await fetch(`${weatherURL}11566&APPID=${apiKey}`);
  const data = await response.json();
  console.log(data);
}
getWeather();
