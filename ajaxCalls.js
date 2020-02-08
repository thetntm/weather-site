//GLOBAL VARS

var apiKey = '9f7f37d7070c769fe52dc778ea34c92e';
var currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather'
var uvIndexURL = 'http://api.openweathermap.org/data/2.5/uvi'
var fiveDayForecastURL = 'api.openweathermap.org/data/2.5/forecast'

//DOM ELEMENTS

//  Input
var jq_city_search_box = $("#city_search_box")

var jq_city_search_button = $("#city_search_button")

var jq_city_links = [
    $("#city_link1"),
    $("#city_link2"),
    $("#city_link3")
]

//  Main Info
var jq_city_name = $("#city_name")

var jq_current_date = $("#current_date")

var jq_current_temp = $("#current_temp")

var jq_current_humidity = $("#current_humidity")

var jq_current_wind_speed = $("#current_wind_speed")

var jq_current_uv_index = $("#current_uv_index")

//  5 Day Forecast

//      Dates
var jq_fiveDay_dates = 
[
    $("#fiveDay_date1"),
    $("#fiveDay_date2"),
    $("#fiveDay_date3"),
    $("#fiveDay_date4"),
    $("#fiveDay_date5")
];

//      Icons
var jq_fiveDay_icons = 
[
    $("#fiveDay_icon1"),
    $("#fiveDay_icon2"),
    $("#fiveDay_icon3"),
    $("#fiveDay_icon4"),
    $("#fiveDay_icon5")
]

//      Temp
var jq_fiveDay_temps = 
[
    $("#fiveDay_temp1"),
    $("#fiveDay_temp2"),
    $("#fiveDay_temp3"),
    $("#fiveDay_temp4"),
    $("#fiveDay_temp5")
]

var jq_fiveDay_humidity = 
[
    $("#fiveDay_humidity1"),
    $("#fiveDay_humidity2"),
    $("#fiveDay_humidity3"),
    $("#fiveDay_humidity4"),
    $("#fiveDay_humidity5")
]

//LOCAL STORAGE

//USEFUL FUNCTIONS

function getDateFromUNIX(unixDate)
{
    const currentDate = new Date(unixDate * 1000);
    return currentDate.toDateString().substring(4).replace(/\s/g,'/');
}

function convertKelvinToFahrenheit(tempKelvin)
{
    return (tempKelvin - 273.15) * 9/5 + 32
}

function updateCurrentWeatherInfo(currentWeatherData)
{
    console.log("UPDATING CURRENT WEATHER INFO")
    console.log(currentWeatherData)

    //  current date

    const currentUNIXtime = currentWeatherData.dt + currentWeatherData.timezone;

    jq_current_date.text(getDateFromUNIX(currentUNIXtime));

    //  current temp

    jq_current_temp.text(convertKelvinToFahrenheit(currentWeatherData.main.temp).toFixed(1));

    //  current humid

    jq_current_humidity.text(currentWeatherData.main.humidity);

    //  current wind speed

    jq_current_wind_speed.text(currentWeatherData.wind.speed);

    console.log("DONE SETTING VALUES")

    //In that AJAX call Make a call to get the UV index

    const lon = currentWeatherData.coord.lon;
    const lat = currentWeatherData.coord.lat;

    $.ajax(uvIndexURL + '?appid=' + apiKey + '&lat=' + lat + '&lon=' + lon,   // request url
    {
        type: 'GET',
        success: function (uvData) {
            jq_current_uv_index.text(uvData.value);
        }
    })

    //  UV Index

}

function updateAJAXInfo(city)
{
    console.log("UPDATING AJAX INFO")
    //Make an AJAX call to get the info for the citY
    $.ajax('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=9f7f37d7070c769fe52dc778ea34c92e',   // request url
    {
        type: 'GET',
        success: updateCurrentWeatherInfo
    })

    //Make an AJAX call to get the five day forecast

    //  Group them into groups of 8 based on index.

    //  Date of each day (can be got by getting like the 4th index)

    //  Icon for each day

    //  average temp

    //  average humidity


    //set the city name
    jq_city_name.text(city);
}

//EVENT FUNCTIONS

//EVENT ASSIGNMENT

//CODE TO RUN AT LAUNCH
jq_current_uv_index.css("background-color","red")
jq_current_uv_index.text("aaaa")
console.log("code runs")

updateAJAXInfo("Houston")