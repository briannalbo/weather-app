const key = "599bfde9dad9e03d506db251b686645c";
var weather = document.querySelector('.weather');

$("#currentDate").text(dayjs().format('MM/DD/YY'));
$("#tomorrow").text(dayjs().add(1,'day').format('MM/DD/YY'));
$("#twodays").text(dayjs().add(2,'day').format('MM/DD/YY'));
$("#threedays").text(dayjs().add(3,'day').format('MM/DD/YY'));
$("#fourdays").text(dayjs().add(4,'day').format('MM/DD/YY'));
$("#fivedays").text(dayjs().add(5,'day').format('MM/DD/YY'));

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition);
}
else {
    notificationElement.style.display = 'block';
    notificationElement.innerHTML = `<p> Browser doesn't support Geolocation`;
}

function setPosition(position) {
    let currentLat = position.coords.latitude;
    let currentLong = position.coords.longitude;

    console.log(currentLat);
    console.log(currentLong);

    getWeather(currentLat, currentLong);

}

function getWeather(currentLat, currentLong) {
    let api = `http://api.openweathermap.org/data/2.5/forecast?lat=${currentLat}&lon=${currentLong}&appid=${key}&units=imperial`;
    console.log(api);
    
    fetch(api)
    .then(function (response) {
    if (response.status !== 200) {
        console.log(response.status);
    }
    return response.json();
})

    .then(function (data) {
    var city = data.city.name;
    console.log(city);
    var temp = Math.floor(data.list[0].main.temp);
    console.log(temp);
    var description = data.list[0].weather[0].description;
    console.log(description);
    var icon = data.list[0].weather[0].icon;
    console.log(icon);
    
$("#city").text(city);
$("#temp").text(temp);
$("#description").text(description);

})};

var atlantalat = 33.753746;
var atlantalong = -84.386330;
$("#atlanta").on("click", function() {
    getWeather(atlantalat, atlantalong);
});

var denverLat = 39.742043;
var denverLong = -104.991531;

$("#denver").on("click", function() {
    getWeather(denverLat, denverLong);
});

var seattleLat = 47.617004;
var seattleLong = -122.343506;
$("#seattle").on("click", function() {
    getWeather(seattleLat, seattleLong)
});

var sanfranLat = 37.773972;
var sanfranLong = -122.431297;
$("#san-francisco").on("click", function() {
    getWeather(sanfranLat, sanfranLong)
});

var orlandoLat = 28.538336;
var orlandoLong = -81.379234;
$("#orlando").on("click", function() {
    getWeather(orlandoLat, orlandoLong)
});

var newyorkLat = 40.764840;
var newyorkLong = -73.980800;
$("#new-york").on("click", function() {
    getWeather(newyorkLat, newyorkLong)
});

var chicagoLat = 41.881832;
var chicagoLong = -87.623177;
$("#chicago").on("click", function() {
    getWeather(chicagoLat, chicagoLong)
});

var austinLat = 30.266666;
var austinLong = -97.733330;
$("#austin").on("click", function() {
    getWeather(austinLat, austinLong)
});