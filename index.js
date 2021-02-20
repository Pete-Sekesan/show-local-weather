"use strict";

//create variable for calling API URL

const weatherURL =
  "http://api.openweathermap.org/data/2.5/weather?&units=imperial&zip=";

//create variable for API Key
const apiKey = "bfb8a7a5a080b6de3711a504201eb15f";

//get data from API

async function getWeather(zip) {
  const response = await fetch(`${weatherURL}${zipCode}&APPID=${apiKey}`);
  const data = await response.json();
  console.log(data);
}

//generate input form
function createForm() {
  return `
  <form id = entry-form>
  <div id = entry-form>
  <label for="zip-search">Enter Zip Code</label>
  <input type="text" name="zip-search" id="zip-search" required
  placeholder="90210">

  <input type="submit" value="Get Weather">


  </div>
  </form>
   `;
}

//display results
function displayResults(data) {}

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
  });
}

renderForm();
