const key = "599bfde9dad9e03d506db251b686645c";
var weather = document.querySelector('.weather');
var atlanta = document.querySelector('#atlanta');
// $("#city1) = document.querySelector('#city1');

majorCities = [
    {
        majorCity: ["Atlanta"],
        lat: ["33.753746"],
        long: ["-84.386330"]
    },
    {
        majorCity: ["Denver"],
        lat: ["39.742043"],
        long: ["-104.991531"]
    },
    {
        majorCity: ["Seattle"],
        lat: ["47.617004"],
        long: ["-122.343506"]
    },
    {
        majorCity: ["San Francisco"],
        lat: ["37.773972"],
        long: ["-122.431297"]
    },
    {
        majorCity: ["Orlando"],
        lat: ["28.538336"],
        long: ["-81.379234"]
    },
    {
        majorCity: ["New York"],
        lat: ["40.730610"],
        long: ["-73.935242"]
    },
    {
        majorCity: ["Chicago"],
        lat: ["41.881832"],
        long: ["-87.623177"]
    },
    {
        majorCity: ["Austin"],
        lat: ["30.266666"],
        long: ["-97.733330"]
    }
];






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
    // getWeather.weater.value = Math.floor(data.main.temp);
    // var currentTemp = data.current.temp;
    // console.log(currentTemp);
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
var cityName = "Atlanta";
$("#atlanta").on("click", function() {
    getWeather(atlantalat, atlantalong);
//     var apiTwo = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;
//     var cityName = "Atlanta";
//     console.log(apiTwo);
//     console.log(cityName);

//     fetch(apiTwo)
//     .then(function (response) {
//     if (response.status !== 200) {
//         console.log(response.status);
//     }
//     return response.json();
// })
// .then(function (data) {
//     // getWeather.weater.value = Math.floor(data.main.temp);
//     // var currentTemp = data.current.temp;
//     // console.log(currentTemp);
//     var cityAtlanta = data.city.name;
//     console.log(cityAtlanta);
//     var tempAtlanta = Math.floor(data.list[0].main.temp);
//     console.log(tempAtlanta);
//     var descriptionAtlanta = data.list[0].weather[0].description;
//     console.log(descriptionAtlanta);
//     // var icon = data.list[0].weather[0].icon;
//     // console.log(icon);
    
// $("#city").text(cityAtlanta);
// $("#temp").text(tempAtlanta);
// $("#description").text(descriptionAtlanta);
});
// })});