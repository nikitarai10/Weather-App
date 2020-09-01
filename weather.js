const searchForm = document.querySelector('.searchlocation');
const cityValue = document.querySelector('.searchlocation input');
const cityName = document.querySelector('.infocity p');
const humidityValue = document.querySelector('.information p');
const descweather = document.querySelector('.weatherinfo p');
const celsiusvalue = document.querySelector('.temperature-value span');
const farhenvalue = document.querySelector('.farhenheit-value span');
const imageicon = document.querySelector(".image-icon");

const weather = {};

const enterbtn = document.getElementById('button');
enterbtn.addEventListener('click',()=>{
    const citySearched = cityValue.value;
     cityValue.value = '';

    requestCity(citySearched)
    .then((data)=>{
        updateWeatherApp(data);
    })
    .catch((error)=>{
        console.log(error)
    })
})

searchForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const citySearched = cityValue.value;
    console.log(citySearched);
    searchForm.reset();

    requestCity(citySearched)
    .then((data)=>{
        updateWeatherApp(data);
    })
    .catch((error)=>{
        console.log(error)
    })
})


const converToCelsius = (temp) =>{
    celsius = Math.round(temp - 273);
    return celsius;
}

function converToFarhenheit(value){
    celsius = Math.round(value - 273);
   let farhen = Math.round((celsius*9/5) + 32);    
   return farhen;
}

 function updateWeatherApp(city){
    console.log(city);
    const imageName = city.weather[0].icon;
    const mycity = city.name;
    const countryName = city.sys.country;
    celsiusvalue.innerHTML = `
    ${converToCelsius(city.main.temp)}&deg;C`;
    descweather.innerHTML = `${city.weather[0].description}`;
    cityName.innerHTML = `${mycity},${countryName}`;
    farhenvalue.innerHTML =`${converToFarhenheit(city.main.temp)}&deg;F`;
    humidityValue.innerHTML = `${city.main.humidity}%`;
    imageicon.innerHTML = `<img src="./icon/${imageName}.png">`;
 }
 