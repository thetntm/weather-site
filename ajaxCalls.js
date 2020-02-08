//GLOBAL VARS

//LOCAL STORAGE

//DOM ELEMENTS

//  Input
var jq_city_search_box = $("#city_search_box")

var jq_city_search_button = $("#city_search_button")

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

//USEFUL FUNCTIONS

//EVENT FUNCTIONS

//EVENT ASSIGNMENT

//CODE TO RUN AT LAUNCH
jq_current_uv_index.css("background-color","red")
jq_current_uv_index.text("aaaa")
console.log("success!")