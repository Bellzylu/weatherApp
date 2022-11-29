

    // function searchCity(event) {
    //     event.preventDefault();
        // let searchInput = document.querySelector("#search-text-input");
        // let h1 = document.querySelector("#city"); 
        // h1.innerHTML =  `${searchInput.value}` ;
        // let p = document.querySelector("#country");
        // p.innerHTML = "";
        
    // } 

// let cityInput = document.querySelector("#search-form");

// cityInput.addEventListener("submit",searchCity);



let currentTime = new Date();

//Function get date with formatting Current-time
function time(timeFormat) {
    let hours = currentTime.getHours();;
    let minutes = currentTime.getMinutes();
    if(minutes < 10 ) {
    minutes = `0${minutes}`
} 
    if (hours >= 12){
    timeFormat  = `${hours}:${minutes} PM`;
} else {
    timeFormat = `${hours}:${minutes} AM`;
}

return timeFormat
}
//Selecting h2, and adding time Method
let h1 = document.querySelector(" #current-time");
h1.innerHTML = time();

//Day formatting in array
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

//Month formatting in array
let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

//Function get date with formatting : "Day, month, date, year"
// Returing variable with formatting that can be re-used
function todaysDate(){
    let day = days[currentTime.getDay()];
    let month = months[currentTime.getMonth()];
    let date = currentTime.getDate();
    let year = currentTime.getFullYear();
    
    let dateFormat = `${day} 
    ${ month} ${ date }. ${ year}`;

    return dateFormat;
}

//Selecting h2, and adding todaysDate Method
let h2 = document.querySelector(" #current-date");
h2.innerHTML = todaysDate();


// //Forecast Section /Bottom-Container Logic

// // Format forcast- days
// let forcastDays = [
//     "Sun",
//     "Mon",
//     "Tue",
//     "Wed",
//     "Thu",
//     "Fri",
//     "Sat", 
// ]


// let currentDay = forcastDays[currentTime.getDay()];
// console.log(currentDay);


// let ul= document.querySelector("#forecast-days");
// ul.innerHTML = nextDays();


