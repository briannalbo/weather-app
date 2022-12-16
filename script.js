const key = "599bfde9dad9e03d506db251b686645c";
var weather = document.querySelector('.weather');
var dataList = document.querySelector('datalist');
var weatherDash = document.querySelector('#display-weather');
// weatherDash.style.display = 'none';
var intro = document.querySelector('#intro');



$("#currentDate").text(dayjs().format('MM/DD/YY'));
$("#tomorrow").text(dayjs().add(1,'day').format('MM/DD/YY'));
$("#twodays").text(dayjs().add(2,'day').format('MM/DD/YY'));
$("#threedays").text(dayjs().add(3,'day').format('MM/DD/YY'));
$("#fourdays").text(dayjs().add(4,'day').format('MM/DD/YY'));
$("#fivedays").text(dayjs().add(5,'day').format('MM/DD/YY'));


$("#user-location").on("click", function() {

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
});

function getWeather(currentLat, currentLong) {
    weatherDash.style.display = 'block';
    intro.style.display = 'none';
    
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

    var iconPath = `./images/${icon}.png`;
    var iconPath2 = `./images/${icon2}.png`;
    var iconPath3 = `./images/${icon3}.png`;
    var iconPath4 = `./images/${icon4}.png`;
    var iconPath5 = `./images/${icon5}.png`;
    var iconPath6 = `./images/${icon6}.png`;

    iconImg.src = iconPath;
    iconImg2.src = iconPath2;
    iconImg3.src = iconPath3;
    iconImg4.src = iconPath4;
    iconImg5.src = iconPath5;
    iconImg6.src = iconPath6;


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



    

    

    
$("#city").text(city);
$("#temp").text(temp + " °");
$("#description").text(description);
$("#humidity").text("Humidity: " + humidity + " %");
$("#wind").text("Wind: " + windSpeed + " mph");

$("#temp2").text(temp2 + " °");
$("#temp3").text(temp3 + " °");
$("#temp4").text(temp4 + " °");
$("#temp5").text(temp5 + " °");
$("#temp6").text(temp6 + " °");

$("#humid2").text("Humidity: " + humid2 + " %");
$("#humid3").text("Humidity: " + humid3 + " %");
$("#humid4").text("Humidity: " + humid4 + " %");
$("#humid5").text("Humidity: " + humid5 + " %");
$("#humid6").text("Humidity: " + humid6 + " %");

$("#wind2").text("Wind: " + wind2 + " mph");
$("#wind3").text("Wind: " + wind3 + " mph");
$("#wind4").text("Wind: " + wind4 + " mph");
$("#wind5").text("Wind: " + wind5 + " mph");
$("#wind6").text("Wind: " + wind6 + " mph");

$("#descript2").text(descript2);
$("#descript3").text(descript3);
$("#descript4").text(descript4);
$("#descript5").text(descript5);
$("#descript6").text(descript6);


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

// var searchedCity = document.querySelector('#searchedCity');
// var userchosencity = searchedCity;

// var apiLoc = `https://api.openweathermap.org/geo/1.0/direct?q=${usechosencity}&limit=5&appid=${key}`;
$("#searchBtn").on("click", function() {
    // var searchedCity = document.querySelector('#searchedCity');
    // $("#searchedCity").text("ch");
    var city = $(this).siblings("input").val();
    
 
    console.log(city);
    let apiLoc = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`;
    // console.log(apiLoc);
    
    fetch(apiLoc)
    .then(function (response) {
    if (response.status !== 200) {
        console.log(response.status);
    }
    return response.json();
    // console.log(response.json());
})

    .then(function (data) {
    var city90= data[0].lon;
    var city30= data[0].name;
    console.log(city30);
    console.log(city90);
    var searchedLat = data[0].lat;
    console.log(searchedLat);
    var state = data[0].state;
    console.log(state);
    $("#city").text(city);
    
    getWeather(searchedLat, city90);
    });

    var savedCity = city;

    if (savedCity === null) {
        console.log("No city searched");
    }

    else {
    var cityArray = {
        savedCity: savedCity,
    }
    }
    console.log(cityArray);
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
    
            var createList = document.createElement("option");
            createList.textContent = allCities[i].savedCity;
            dataList.appendChild(createList);
    
        }
    }
    
});

// function saveHistory() {
//     var savedCity = city;

//     if (savedCity === null) {
//         console.log("No city searched");
//     }

//     else {
//     var cityArray = {
//         savedCity: savedCity,
//     }
//     }
//     console.log(cityArray);
//     var allCities = localStorage.getItem("allCities");
//     if (allCities === null) {
//         allCities = [];
//     }
//     else {
//         allCities =JSON.parse(allCities);
//     }
//     allCities.push(cityArray);
//     var newcity = JSON.stringify(allCities);
//     localStorage.setItem("allCities", newcity);
    
//     console.log(newcity);
//     console.log(cityArray);

//     if (allCities !== null) {

//         for (var i = 0; i < allCities.length; i++) {
    
//             var createList = document.createElement("option");
//             createList.textContent = allCities[i].savedCity;
//             dataList.appendChild(createList);
    
//         }
//     }
// };

$("#clear-history").on("click", function() {
    localStorage.clear();
    location.reload();
}
);