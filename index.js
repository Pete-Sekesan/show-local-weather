"use strict";

//create variable for calling API URL

const weatherURL =
  "http://api.openweathermap.org/data/2.5/weather?&units=imperial&zip=";

//create variable for API Key
const apiKey = "bfb8a7a5a080b6de3711a504201eb15f";

//get data from API

async function getWeather(zipCode) {
  const response = await fetch(`${weatherURL}${zipCode}&APPID=${apiKey}`);
  const data = await response.json();
  console.log(data);
}

//display results
function displayResults(data) {
  $("main").append(
    `<div> 
    ${data}
    </div>`
  );
}

//render the  created form
function renderForm() {
  $("main").append(createForm());
  return;
}

//watch form
function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    const zipCode = $("#zip-search").val();
    getWeather(zipCode);
    displayResults();
  });
}

$(watchForm);
