//global variables
var weatherData = "";

//Forecast Weather Button click listner
//Make ajax call according to data entered city name or selected from the Map
$(document).on('click', '#search', function () {
    var city = $('#cityName').val();
    var country = $('#selected-country').val();
    appendFirst5Days();

    var lat, lng, url, secondUrl = null;
    lat = localStorage.getItem("lat");
    lng = localStorage.getItem("lng");
    localStorage.clear();

    //if longitude and latitude are not null then search weather according to the longitude and lattitude
    if (lng != null && lat != null) {
        //alert(lat + " and " + lng);
        url = "http://api.wunderground.com/api/70d544f28782df8e/geolookup/q/" + lat + "," + lng + ".json";
        $.get(url, function (data, status) {
            city = data.location.city;
            country = data.location.country;
            $('#city-country').empty();

            secondUrl = "http://api.wunderground.com/api/70d544f28782df8e/forecast10day/q/" + country + "/" + city + ".json";
            $.get(secondUrl, function (returnData, status) {
                weatherData = returnData;
                if (country != 0) {
                    $('#city-country').append(city + ", " + country);
                }
                displayWeather(returnData, 1, 6);
                return;
            });
        });
    } else {
        url = "http://api.wunderground.com/api/70d544f28782df8e/forecast10day/q/" + country + "/" + city + ".json";
        $('#city-country').empty();
        //alert(url);
        $.get(url, function (data, status) {
            weatherData = data;
            if (country != 0) {
                $('#city-country').append(city + ", " + country);
            }
            displayWeather(data, 1, 6);
        });
    }
});

$(document).on('click', '#btn-next5-days', function () {
    appendNext5Days();
    displayWeather(weatherData, 6, 11);
});

//This function Display the weather data on index page and used by ajax calls
function displayWeather(data, dayFrom, dayTo) {
    var forecast = null;
    forecast = data.forecast;
    if (forecast == null) {
        alert("Cannot find the result for selected place ");
        $('#show-row1').empty();
        $('#show-row2').empty();
        $('#city-country').empty();
        return;
    }
    var simple = forecast.simpleforecast;
    var forEachDay = simple.forecastday;
    for (var i = dayFrom; i < dayTo; i++) {
        var fullDayData = forEachDay[i - 1];
        var day = "<h2>" + fullDayData.date.weekday_short + ", " + fullDayData.date.day + " " + fullDayData.date.monthname_short + "</h2>";
        var high = "<h3>High " + fullDayData.high.celsius + "<sup>o</sup>C </h3>";
        var low = "<h3>Low " + fullDayData.low.celsius + "<sup>o</sup>C</h3>";
        var condition = "<h3>Condition " + fullDayData.conditions + "</h3>";
        $('#day' + i).empty();
        $('#day' + 1).css({ 'background-image': 'url(' + fullDayData.icon_url + ')', 'background-repeat': 'no-repeat' });
        $('#day' + i).append(day + high + low + condition);
    }
}

function appendFirst5Days() {
    $('#show-row1').empty();
    $('#show-row2').empty();
    var row = "";
    for (var i = 1; i < 6; i++) {
        row = row + '<div class="col-md-2 " id="day' + i + '" > </div>';
    }
    var buttonNext = '<div class="col-md-2 " > <button type="button" id="btn-next5-days" class="btn btn-warning" style="width: 100%">Next 5 Days</button></div>';
    $('#show-row1').append(row);
    $('#show-row2').append(buttonNext);
    row = "";
}

function appendNext5Days() {
    $('#show-row2').empty();
    var row = "";
    for (var i = 6; i < 11; i++) {
        row = row + '<div class="col-md-2 " id="day' + i + '" > </div>';
    }
    $('#show-row2').append(row);
}








