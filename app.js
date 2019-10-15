const weather_p =document.getElementById('weather'); 
const searchBar = document.getElementById('search'); 
const searchButton = document.querySelector('button'); 
const weatherDescription = document.getElementById('description'); 
const weatherIcon = document.getElementById('weather-icon'); 

searchButton.addEventListener('click', getURL);  
searchBar.addEventListener('keypress', function(event){
    if(event.keyCode ==13){
        searchButton.click();
    }
});

function getURL(city){
    city = searchBar.value; 
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},US&units=imperial&APPID=81b3b8af03008bae631d214dad2333a6`; 
    fetch(url, {mode: 'cors'})
    .then(blob => blob.json())
    .then(data => {
        renderWeatherMessage(data);
        console.log(data); 
    });   
}

function renderWeatherMessage(data) {
    weather_p.textContent = `It is ${data.main.temp} degrees in ${data.name} `;
    switch(data.weather[0].main) {
        case 'Clouds' :
            weatherDescription.textContent = `${data.weather[0].description}`;
            weatherIcon.innerHTML = '<i class = "fas fa-cloud"></i>';
            weatherIcon.style.color = 'darkgray'; 
            break; 
        case 'Clear' :
            weatherDescription.textContent =`${data.weather[0].description}`; 
            weatherIcon.innerHTML ='<i class = "fas fa-sun"></i>';
            weatherIcon.style.color ='gold'; 
            break; 
        case 'Rain' :
        case 'Drizzle' :
            weatherDescription.textContent = `${data.weather[0].description}`; 
            weatherIcon.innerHTML = '<i class ="fas fa-cloud-rain"></i>'
            weatherIcon.style.color ='darkgray'; 
            break;
        case 'Thunderstorm' :
            weatherDescription.textContent = `${data.weather[0].description}`;
            weatherIcon.innerHTML = '<i class ="fas fa-poo-storm"></i>'
            weatherIcon.style.color ='darkgray';
            break; 
        case 'Snow' :
            weatherDescription.textContent = `${data.weather[0].description}`;
            weatherIcon.innerHTML = '<i class ="fas fa-snowflake></i>'
            weatherIcon.style.color ='darkgray';
            break; 
    }
    if (data.weather[0].description == 'few clouds') {
            weatherDescription.textContent = `${data.weather[0].description}`; 
            weatherIcon.innerHTML = '<i class = "fas fa-cloud-sun"></i>'
            weatherIcon.style.color = 'lightgray'; 
    }
}

/* maybe write a function to capitlize just first letter of weather description. 
function capitalize(string) {

}
*/ 