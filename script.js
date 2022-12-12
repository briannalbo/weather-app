const key = "599bfde9dad9e03d506db251b686645c";
var weather = document.querySelector('.weather');
// $("#city1) = document.querySelector('#city1');
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
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    console.log(latitude);
    console.log(longitude);

    getWeather(latitude, longitude);

}

function getWeather(latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial`;
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


