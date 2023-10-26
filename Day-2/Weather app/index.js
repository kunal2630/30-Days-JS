let inputText=document.querySelector(".search-box");
let inputBox=document.querySelector(".search-cont");;
let search=document.querySelector(".search-icon");
let cityNameCont=document.querySelector(".city");
let humidity=document.querySelector(".humidity");;
let windSpeed=document.querySelector(".wind-speed");
let temperature=document.querySelector(".temp-data");
let imgLocation=document.querySelector(".image");

const api_key="195dcc5df20f79e41665e8fb9aba4113";

search.addEventListener("click",()=>{
   
    getData(inputText.value);
    

})

inputBox.addEventListener("keypress",(e)=>{

    if(e.key=="Enter"){
        getData(inputText.value);
    }

})

async function getData(city){

    let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api_key}`);
    let jsonData=await data.json();
    console.log(jsonData);


    cityNameCont.innerHTML=jsonData.name?jsonData.name:(jsonData.message[0].toUpperCase()+jsonData.message.slice(1));
    humidity.innerHTML=`${jsonData.main.humidity}%`;
    windSpeed.innerHTML=`${jsonData.wind.speed} km/h`;
    temperature.innerHTML=Math.round(jsonData.main.temp);

    if(jsonData.weather[0].main=="Clear"){
        imgLocation.src="./images/clear.png"
    }
    else if(jsonData.weather[0].main=="Clouds"){
        imgLocation.src="./images/clouds.png"
    }
    else if(jsonData.weather[0].main=="Rain"){
        imgLocation.src="./images/rain.png"
    }
    else if(jsonData.weather[0].main=="Drizzle"){
        imgLocation.src="./images/drizzle.png"
    }
    else if(jsonData.weather[0].main=="Mist"){
        imgLocation.src="./images/mist.png"
    }

}


let dummyCity="purnia";
getData(dummyCity);