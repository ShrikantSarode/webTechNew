// c0ae1147bd7d53ff187e2d60dd2479b8;
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const API_key = "c0ae1147bd7d53ff187e2d60dd2479b8";
// const url =
//     "https://api.openweathermap.org/data/2.5/weather?units=metric&q=maharashtra";

const searchInput = document.querySelector("#inp1");
const searchBtn = document.querySelector("#btn");

async function checkWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_key}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  document.querySelector(
    "#humidity"
    ).innerHTML = `Humidity: ${data.main.humidity}%`;
    
    document.querySelector("#wind").innerHTML = `Wind Speed: ${data.wind.speed} km/hr`;
    
 document.querySelector("#fahrenheit").innerHTML = `Fahrenheit: ${Math.floor(
   (data.main.temp * 9) / 5 + 32
 )} <sup>o</sup> F`;

    
    document.querySelector("#temp").innerHTML = `${data.main.temp}<sup>o</sup>C `; 
    document.querySelector("#city").innerHTML = data.name; 
    document.querySelector("#desc").innerHTML = data.weather[0].description; 
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});

