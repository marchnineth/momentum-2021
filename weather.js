const API_KEY = "07cbd2abc830e1b4301e44386c724939";
const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const logitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
        // object와 key 값이 동일할 경우 위처럼 하나만 써줘도 된다
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem (COORDS);
    if(loadedCords === null){
        askForCoords();
    } else{
        // getWeather
    }
}

function init(){
    loadCoords();
}

init();