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
    console.log(response.json);
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
    var humidity = data.list[0].main.humidity;
    console.log(humidity);
    var windSpeed = data.list[0].wind.speed;
    console.log(windSpeed);
    var temp2 = Math.floor(data.list[7].main.temp);
    var temp3 = Math.floor(data.list[15].main.temp);
    var temp4 = Math.floor(data.list[23].main.temp);
    var temp5 = Math.floor(data.list[31].main.temp);
    var temp6 = Math.floor(data.list[39].main.temp);
    var humid2 = data.list[7].main.humidity;
    var humid3 = data.list[15].main.humidity;
    var humid4 = data.list[23].main.humidity;
    var humid5= data.list[31].main.humidity;
    var humid6 = data.list[39].main.humidity;
    var wind2 = data.list[7].wind.speed;
    var wind3 = data.list[15].wind.speed;
    var wind4 = data.list[23].wind.speed;
    var wind5 = data.list[31].wind.speed;
    var wind6 = data.list[39].wind.speed;
    
$("#city").text(city);
$("#temp").text(temp + " degrees");
$("#description").text(description);
$("#humidity").text("humidity: " + humidity);
$("#wind").text("wind-speed " + windSpeed);

$("#temp2").text(temp2 + " degrees");
$("#temp3").text(temp3 + " degrees");
$("#temp4").text(temp4 + " degrees");
$("#temp5").text(temp5 + " degrees");
$("#temp6").text(temp6 + " degrees");

$("#humid2").text("humidity: " + humid2);
$("#humid3").text("humidity: " + humid3);
$("#humid4").text("humidity: " + humid4);
$("#humid5").text("humidity: " + humid5);
$("#humid6").text("humidity: " + humid6);

$("#wind2").text("wind-speed " + wind2);
$("#wind3").text("wind-speed " + wind3);
$("#wind4").text("wind-speed " + wind4);
$("#wind5").text("wind-speed " + wind5);
$("#wind6").text("wind-speed " + wind6);




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

var searchedCity = document.querySelector("#searchedCity");
var userchosencity = searchedCity;

// var apiLoc = `https://api.openweathermap.org/geo/1.0/direct?q=${usechosencity}&limit=5&appid=${key}`;
$("#searchBtn").on("click", function() {
    
    let apiLoc = `https://api.openweathermap.org/geo/1.0/direct?q=${chicago}&limit=5&appid=${key}`;
    // console.log(apiLoc);
    
    fetch(apiLoc)
    .then(function (response) {
    if (response.status !== 200) {
        console.log(response.status);
    }
    return response.json();
    // console.log(response.json);
})

    .then(function (data) {
    // var city90= data[0].lon;
    // console.log(city90);
    var searchedLat = data[0].lat;
    console.log(searchedLat);
    })
});
