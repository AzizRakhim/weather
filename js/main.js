let elForm = document.querySelector(".hero__form");
let elInput = document.querySelector(".hero__input");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let elSearch = elInput.value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${elSearch}&units=metric&appid=33dedde6287575d237be2e1c44271762`)
    .then((res) => res.json())
    .then((data) => {
      showHTML(data);
    });
});

function showHTML(data){
  console.log(data);
  let elName = document.querySelector(".country-name");
  elName.innerText = data.name;

  let elCountry = document.querySelector(".country");
  elCountry.innerText = data.sys.country;

  let elDegree = document.querySelector(".degree");
  elDegree.innerText = Math.floor(data.main.temp);

  let elTemp = document.querySelector(".hero__temperature");
  elTemp.innerText = data.weather[0].main;

  let elHumidity = document.querySelector(".humidity");
  elHumidity.innerText = data.main.humidity;

  let elWindSpeed = document.querySelector(".wind-speed");
  elWindSpeed.innerText = Math.floor(data.wind.speed);

  elInput.value = "";

  let elWeatherIcon = document.querySelector("#weather-icon");
  let elWeatherImg = document.querySelector(".weather-img");

  if(elTemp.innerText.includes("Clouds") || elTemp.innerText.includes("Sunny")){
    elWeatherIcon.className = "bx bx-sun";
    elWeatherImg.src = "images/sun-dynamic-color.png";
    document.body.style.background = "#42c2ff";
    elInput.style.setProperty("--c", "#97a0b9");
  } else if(elTemp.innerText.includes("Clear")) {
    elWeatherIcon.className = "bx bx-moon";
    elWeatherImg.src = "images/moon-dynamic-color.png";
    document.body.style.background = "#712b75";
    elInput.style.setProperty("--c", "#F2FBFF");
  } else if(elTemp.innerText.includes("Snow")){
    elWeatherIcon.className = "bx bx-cloud-snow";
    elWeatherImg.src = "images/snow.png";
    document.body.style.background = "#6ba7cc";
    elInput.style.setProperty("--c", "#F2FBFF");
  } else if(elTemp.innerText.includes("Rain") || elTemp.innerText.includes("Mist") || elTemp.innerText.includes("Haze")){
    elWeatherIcon.className  = "bx bx-cloud-rain";
    elWeatherImg.src = "images/rain.png";
    document.body.style.background = "#a8aac4";
    elInput.style.setProperty("--c", "#F2FBFF");
  }
}

