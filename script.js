const key = "599bfde9dad9e03d506db251b686645c";
var weather = document.querySelector('.weather');

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition);
}
else {
    notificationElement.style.display = 'block';
    notificationElement.innerHTML = `<p> Browser doesn't support Geolocation`;
}

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    console.log(latitude);
    console.log(longitude);

    getWeather(latitude, longitude);

}

function getWeather(latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;
    console.log(api);
    
    fetch(api)
    .then(function(response) {
    let data= response.json();
    return data;
    });
    .then(function(data) {
    getWeather.weater.value = Math.floor(data.main.temp);
});
}