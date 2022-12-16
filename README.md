# Weather-App

## User Story

```md
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```md
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and 
that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation 
of weather conditions,the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon 
representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```
## Work Done
The page was styled using html, css, bootstrap, and javascript.
Dayjs was used to add the corresponding dates of the weather forecast.
The open weather api was used to pull data pertaining to 5 day weather forecast.
The open weather geo location api was used to allow the user to search weather for specific cities.
Easy acces to the weather of major cities is provided through a group of buttons corresponding to 
those popular cities; their weather can be accessed by clicking on each.
User search history was added by saving each search to local storage then displaying them as options 
under the search bar.
A clear history button was added to give users the option to clear their search history.
An intro banner is displayed upon opening the page to give it a cleaner look when no weather has been search yet.

## Future Developments

I plan to incorporate a drop down menu to add states to the search criteria in order to avoid
cities with popular names preventing the user from accessing the information they are looking for.
I also plan to enhance the localstorage component to make it more polished.


## Deployed Webpage
https://briannalbo.github.io/weather-app/

![screenshot.png](https://github.com/briannalbo/weather-app/blob/main/images/screenshot.png)

## Sources
API url and documentation can be found here: https://openweathermap.org/forecast5#call


