const apiKey = `9792b353bd8acd4490ee02621b76444a`;

async function fetchWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    const data = await response.json();
    console.log(data);
    updateWeatherUI(data);
}

const cityElement = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const windspeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visibility-distance");
const discriptionText = document.querySelector(".description-text");
const date = document.querySelector(".date");

function updateWeatherUI(data) {
    cityElement.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)} °`;
    windspeed.textContent = `${data.wind.speed} km/h`;
    humidity.textContent = `${data.main.humidity} %`;
    visibility.textContent = `${data.visibility / 1000} km`;
    discriptionText.textContent = data.weather[0].description;

    const currentDate = new Date();
    date.textContent = currentDate.toDateString();
}

const formElement = document.querySelector(".search-form");
const inputElement = document.querySelector(".city-input");

formElement.addEventListener('submit', function (e) {
    e.preventDefault();

    const city = inputElement.value;
    if (city !== "") {
        fetchWeatherData(city);
        inputElement.value = "";
    }
})