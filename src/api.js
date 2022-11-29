
//Weather API key
let apiKey = "a72eacb9d82e854fa98860dc2139989e";


function getWeatherData(){
let input = document.querySelector("#search-text-input");
let weatherUrl =`https://api.openweathermap.org/data/2.5/weather?q=${input.value}`
axios.get(`${weatherUrl}&appid=${apiKey}&units=metric`).then(updateDegrees);
}


//API call function
// ApiURL
//Axios.get data, call update degrees function

// Function to update header
// query selector to identify header to be changed
// update header with the input value of the seach field

function updateHeader(event){
    let textInput = document.querySelector("#search-text-input");
    let cityHeader = document.querySelector("#city");
    cityHeader.innerHTML = `${textInput.value}` || "Oslo";

}

function showPosition(position){
    console.log(position.coords.latitude);
console.log(position.coords.longitude);
alert(`lat: ${position.coords.latitude}, long: ${position.coords.longitude}`)}

function getGeoLocation(event){ 
let position = navigator.geolocation.getCurrentPosition(showPosition);


}

let geoBtn = document.querySelector("#btn-location");
    geoBtn.addEventListener("click", getGeoLocation);




// function apiURL(city){
//     let cityHeader = updateHeader(city);
//     let url ="https://api.openweathermap.org/data/2.5/weather?q=${city}"
// }

//Function to update degrees
// query selctor to identify which element to be changed

function updateDegrees(response){
    let temperatureRounded = Math.round(response.data.main.temp);
    let degrees = document.querySelector("#degrees-now");
    degrees.innerHTML = `${temperatureRounded} °C `;
}

// function apiCall(url){
//     let weatherUrl = apiURL(url);
// 
// }
// let weatherUrl = apiURL(url);



// submit function that 
// 1. does the api call
// 2. updates the city in header
// 3. updates the degrees in bottom container -the actual temp variable from API call

function onSubmit(event){
    event.preventDefault();
    updateHeader();
    // updateDegrees();
    getWeatherData();
    
}

let cityInput = document.querySelector("#search-form");
cityInput.addEventListener("submit", onSubmit);



