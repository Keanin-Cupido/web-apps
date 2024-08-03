// 7162720620d3ecb9eb1b874978a1abfd

const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('temp-img');
const description = document.getElementById('description');
const tempMax = document.getElementById('temp-max');
const tempMin = document.getElementById('temp-min');


// Date
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDay();
let year = dateObj.getUTCFullYear();

date.innerHTML = `${day} ${month} ${year}`;


// Weather API
const app = document.getElementById('app');
const getWeather = async () => {
    try {
        // Get User Input
        const cityName = document.getElementById('search-bar-input').value;
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName || "Cape Town"}&appid=7162720620d3ecb9eb1b874978a1abfd&units=metric`, {
            headers: {
                Accept: 'application/json'
            }
        });

        const weatherData = await weatherDataFetch.json();
        console.log(weatherData);

        city.innerHTML = `${weatherData.name}`;
        description.innerHTML = `${weatherData.weather[0].main}`;
        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" />`;
        temp.innerHTML = `${Math.round(weatherData.main.temp)} °C`;
        tempMax.innerHTML = `${Math.round(weatherData.main.temp_max)}°C`;
        tempMin.innerHTML = `${Math.round(weatherData.main.temp_min)}°C`;
    } catch (error) {
        console.log(error);
    }
}

getWeather();