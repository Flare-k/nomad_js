const weather = document.querySelector(".js-weather");

const API_KEY = "813a362b4574ab4e5bf80f5d5220b9f0";
const COORDS = 'coords'; //key
/*
 어떻게 JavaScript를 이용해서 특정 URL을 호출할 수 있을까?
 --> JavaScripy는 웹사이트로 Request를 보내고 Response를 통해서 데이터를 얻을 수 있다.
 가져온 데이터를 Refresh 없이도 나의 웹사이트에 적용시킬 수 있다. 
*/
function getWeather(lat, lng) {
    //데이터를 얻는 방법은 fetch를 이용해주면 된다.
    //fetch를 통해 API로 부터 데이터를 request하고 response 받는다.
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response) {
        //데이터가 완전히 넘어왔을 때, 함수를 실행한다. 즉, fetch가 완료되면 함수를 실행한다.        
        return response.json() //응답한 내용을 json형태로 받는다.
    }).then(function(json) {
        console.log(json);
        const tempeature = json.main.temp;
        const place = json.name;
        const sky = json.weather[0].description;
        weather.innerText = `${sky} ${tempeature}℃\n@ ${place} city`;
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj)); //coords라는 key의 value값으로 객체를 저장
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Error!!")
}


function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS); //coords라는 key가져옴
    if (loadedCoords === null) { //coords라는 key가 없다면??  --> 자동으로 getWeather까지 실행된다.
        askForCoords();
    } else { //만약 객체가 이미 존재한다면.. 즉, key가 이미 존재한다면..
        //getWeather
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();