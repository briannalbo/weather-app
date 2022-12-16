//sets api key as variable to pass into api call
const key = "599bfde9dad9e03d506db251b686645c";
// sets variables for html ids to manipulate DOM
var weatherDash = document.querySelector('#display-weather');
var intro = document.querySelector('#intro');


//uses the dayjs library to set all of the dates of the weather forecast
$("#currentDate").text(dayjs().format('MM/DD/YY'));
$("#tomorrow").text(dayjs().add(1,'day').format('MM/DD/YY'));
$("#twodays").text(dayjs().add(2,'day').format('MM/DD/YY'));
$("#threedays").text(dayjs().add(3,'day').format('MM/DD/YY'));
$("#fourdays").text(dayjs().add(4,'day').format('MM/DD/YY'));
$("#fivedays").text(dayjs().add(5,'day').format('MM/DD/YY'));

//creates a click function to pass the users current location into the getWeather funtion
$("#user-location").on("click", function() {
    //if user allows location setting, gets their coordinates
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition);
}
//gets user coordinates
function setPosition(position) {
    let currentLat = position.coords.latitude;
    let currentLong = position.coords.longitude;
//console logs users current coordinates
    console.log(currentLat);
    console.log(currentLong);
//passes users current coordinates into getWeather function
    getWeather(currentLat, currentLong);
}
});

//main function that generates weather for a city of the user's choice
function getWeather(currentLat, currentLong) {

//this is the weather api where all of the forecasts information is pulled
    let api = `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLat}&lon=${currentLong}&appid=${key}&units=imperial`;
//this is where we fetch info from the api    
    fetch(api)
//first we check to make sure the request is successful
    .then(function (response) {
    if (response.status !== 200) {
        console.log(response.status);
    }
    return response.json();
})
//this is where the data is pulled from the api
//follows the path of the object to pull specific data like temp, wind, humidity
    .then(function (data) {
    var city = data.city.name;
    console.log(city);
    var temp = Math.floor(data.list[0].main.temp);
    console.log(temp);
    var description = data.list[0].weather[0].description;
    console.log(description);
    var humidity = data.list[0].main.humidity;
    console.log(humidity);
    var windSpeed = data.list[0].wind.speed;
    console.log(windSpeed);
//when pulling the data, i used increments of 8 to ensure the weather info was 24 hours apart
//this sets all of the necessary info from the api to variables
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
    var descript2 = data.list[7].weather[0].description;
    var descript3 = data.list[15].weather[0].description;
    var descript4 = data.list[23].weather[0].description;
    var descript5 = data.list[31].weather[0].description;
    var descript6 = data.list[39].weather[0].description;

    var icon = data.list[0].weather[0].icon;
    console.log(icon);
    var icon2 = data.list[7].weather[0].icon;
    var icon3 = data.list[15].weather[0].icon;
    var icon4 = data.list[23].weather[0].icon;
    var icon5 = data.list[31].weather[0].icon;
    var icon6 = data.list[39].weather[0].icon;
    

//this passes the variables of info to display them to the page
    $("#icon-image").text(icon);
    $("#iconimg2").text(icon2);
    $("#iconimg3").text(icon3);
    $("#iconimg4").text(icon4);
    $("#iconimg5").text(icon5);
    $("#iconimg6").text(icon6);
    
    var iconImg = document.createElement("img");
    var iconImg2 = document.createElement("img");
    var iconImg3 = document.createElement("img");
    var iconImg4 = document.createElement("img");
    var iconImg5 = document.createElement("img");
    var iconImg6 = document.createElement("img");

//i saved all of the openweather icons in an images file
// the icon paths pull the icon numbers from the api, get passed into the path and then displayed to page
    var iconPath = `./images/${icon}.png`;
    var iconPath2 = `./images/${icon2}.png`;
    var iconPath3 = `./images/${icon3}.png`;
    var iconPath4 = `./images/${icon4}.png`;
    var iconPath5 = `./images/${icon5}.png`;
    var iconPath6 = `./images/${icon6}.png`;

//sets the source of each created image and sets the path to display the image provided in the data
    iconImg.src = iconPath;
    iconImg2.src = iconPath2;
    iconImg3.src = iconPath3;
    iconImg4.src = iconPath4;
    iconImg5.src = iconPath5;
    iconImg6.src = iconPath6;

//i set all of the text to '' to avoid displaying the icon codes
//then appended the images to display the icons
    $("#icon-image").text("");
    $("#icon-image").append(iconImg);
    $("#iconimg2").text("");
    $("#iconimg2").append(iconImg2);
    $("#iconimg3").text("");
    $("#iconimg3").append(iconImg3);
    $("#iconimg4").text("");
    $("#iconimg4").append(iconImg4);
    $("#iconimg5").text("");
    $("#iconimg5").append(iconImg5);
    $("#iconimg6").text("");
    $("#iconimg6").append(iconImg6);

//displays users chosen city to page    
$("#city").text(city);
//displays temp to todays weather
$("#temp").text(temp + " °");
//displays description of todays weather to page
$("#description").text(description);
//displays todays humidity to page
$("#humidity").text("Humidity: " + humidity + " %");
//displays todays windspeed to page
$("#wind").text("Wind: " + windSpeed + " mph");

//displays 5 days of termp to page
$("#temp2").text(temp2 + " °");
$("#temp3").text(temp3 + " °");
$("#temp4").text(temp4 + " °");
$("#temp5").text(temp5 + " °");
$("#temp6").text(temp6 + " °");

//displays 5 days of humidity to page
$("#humid2").text("Humidity: " + humid2 + " %");
$("#humid3").text("Humidity: " + humid3 + " %");
$("#humid4").text("Humidity: " + humid4 + " %");
$("#humid5").text("Humidity: " + humid5 + " %");
$("#humid6").text("Humidity: " + humid6 + " %");

//displays 5 days of windspeed to page
$("#wind2").text("Wind: " + wind2 + " mph");
$("#wind3").text("Wind: " + wind3 + " mph");
$("#wind4").text("Wind: " + wind4 + " mph");
$("#wind5").text("Wind: " + wind5 + " mph");
$("#wind6").text("Wind: " + wind6 + " mph");

//displays 5 days of weather descriptions to page
$("#descript2").text(descript2);
$("#descript3").text(descript3);
$("#descript4").text(descript4);
$("#descript5").text(descript5);
$("#descript6").text(descript6);

//this removes the intro then displays the weather dashboard
//this was moved to the bottom for smoother transition because all of the data will be pulled and displayed faster
intro.style.display = 'none';
weatherDash.style.display = 'block';
})
};

// i manually created variables for major cities coordinates
//when each major city's button is click by the user that city's coordinates are passed into the getWeather funtion
//atlanta's coorinates
var atlantalat = 33.753746;
var atlantalong = -84.386330;
//click function to display atlanta's weather
$("#atlanta").on("click", function() {
    getWeather(atlantalat, atlantalong);
});

//denver's coordinates
var denverLat = 39.742043;
var denverLong = -104.991531;
//click function to display denver's weather
$("#denver").on("click", function() {
    getWeather(denverLat, denverLong);
});

//seattles coordinates
var seattleLat = 47.617004;
var seattleLong = -122.343506;
//click function to display seattles weather
$("#seattle").on("click", function() {
    getWeather(seattleLat, seattleLong)
});

//san francisco's coordinates
var sanfranLat = 37.773972;
var sanfranLong = -122.431297;
//click function to display san francisco's weather
$("#san-francisco").on("click", function() {
    getWeather(sanfranLat, sanfranLong)
});

//orlandos coordinates
var orlandoLat = 28.538336;
var orlandoLong = -81.379234;
//click function to display orlando's weather
$("#orlando").on("click", function() {
    getWeather(orlandoLat, orlandoLong)
});

//new york's coordinates
var newyorkLat = 40.764840;
var newyorkLong = -73.980800;
//click function to display new york's weather
$("#new-york").on("click", function() {
    getWeather(newyorkLat, newyorkLong)
});

//chicago's coordinates
var chicagoLat = 41.881832;
var chicagoLong = -87.623177;
//click function to display chicago's weather
$("#chicago").on("click", function() {
    getWeather(chicagoLat, chicagoLong)
});

//austin's coordinates
var austinLat = 30.266666;
var austinLong = -97.733330;
//click function to display austin's weather
$("#austin").on("click", function() {
    getWeather(austinLat, austinLong)
});

//this is a click function to pull user's input from the search city 
//when they type in a city then click search it is entered into the open weather geolocation api in order to get that city's coordinates
$("#searchBtn").on("click", function() {

    $("#city").text(city);
    //sets user input to a variable
    var city = $(this).siblings("input").val();
    $("#city").text(city);
    console.log(city);
    //passes user input into geolocation api
    let apiLoc = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`;
    
    //checks to make sure request is successfull
    fetch(apiLoc)
    .then(function (response) {
    if (response.status !== 200) {
        console.log(response.status);
    }
    return response.json();
})
//pulls the user's searched city's coordinates from geo loc api
    .then(function (data) {
    var city90 = data[0].lon;
    var city30 = data[0].name;
    console.log(city30);
    console.log(city90);
    var searchedLat = data[0].lat;
    console.log(searchedLat);
    var state = data[0].state;
    console.log(state);
    $("#city").text(city);
    
    //passes that city's coordinates into the getWeather function to get its weather/display it to page
    getWeather(searchedLat, city90);
    }
    );

    //this is where local storage is created
    var savedCity = city;
    var dataList = document.querySelector('#dataList');
    if (savedCity === null) {
        console.log("No city searched");
    }
    else {
    var cityArray = {
        savedCity: savedCity,
    }
    }
    console.log(cityArray);
    //sets and gets items from local storage
    //all entries user searched in the city search bar are saved to localstorage
    var allCities = localStorage.getItem("allCities");
    if (allCities === null) {
        allCities = [];
    }
    else {
        allCities =JSON.parse(allCities);
    }
    allCities.push(cityArray);
    var newcity = JSON.stringify(allCities);
    localStorage.setItem("allCities", newcity);
    
    console.log(newcity);
    console.log(cityArray);

    if (allCities !== null) {

        for (var i = 0; i < allCities.length; i++) {
    //each search the user makes creates options in a dropdown in the search bar
            var createList = document.createElement("option");
            createList.textContent = allCities[i].savedCity;
            $("dataList").append(createList);
    
        }
    }
    
});

//clear history button clears local storage/ user search history
$("#clear-history").on("click", function() {
    localStorage.clear();
    location.reload();
}
);