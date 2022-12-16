# Weather-App

## Task
Build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

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
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```
## Work Done
```md
I styled the page using html, css, and bootstrap.
I used dayjs to add the corresponding dates of the weather forecast.
I used the open weather api to pull data pertaining to 5 day weather forecast.
I used the open weather geo location api to allow the user to search weather for specific cities.
I added easy access to weather of major cities by creating a group of buttons corresponding to 
those popular cities; their weather can be accessed by clicking on each.
I added user search history by saving each search to local storage then displaying them as options 
under the search bar.
I added a clear history button to give users the option to clear their search history.
I added an intro banner make the page look cleaner when no weather has been search yet.


```
## Deployed Webpage
https://briannalbo.github.io/weather-app/

![screenshot.png](https://github.com/briannalbo/weather-app/blob/main/screenshot.png)

