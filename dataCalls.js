

$(document).on('click', '#search', function() {
		var city = $('#cityName').val();
		var country = $('#selected-country').val();

		alert(city + " " + country);
  
		 $.get("http://api.wunderground.com/api/70d544f28782df8e/forecast10day/q/" +country+"/"+city+".json", function(data, status){
			 
			 var forecast = data.forecast;
			 var simple = forecast.simpleforecast;
			 var forEachDay = simple.forecastday;
			 //alert(forEachDay.length);
			 var firstDay = forEachDay[0];
			 for(var i = 1; i < 6; i++){

				var fullDayData = forEachDay[i-1];
				var day = "<h2>"+ fullDayData.date.weekday+", "+ fullDayData.date.day + "/" + fullDayData.date.month+  "</h2>";
				 var high = "<h3>High Temp " + fullDayData.high.celsius + "</h3>";
				 var low = "<h3>Low Temp " + fullDayData.low.celsius + "</h3>";
				//  alert(day + ", " + high + " " + low + firstDay.icon_url );
				 $('#day'+i).append(day + high + low);
				 $('#day'+1).css('background-image:','url('+ fullDayData.icon_url +')');
			 }
			 ///var day1, day2, day3, day4, day5, day6;
			 //for(var i = 0; i < forEachDay.length; i ++ ){
				 
				//DaysWeather day1 = DaysWeather(firstDay.date.day, firstDay.date.month, firstDay.date.year, firstDay.date.weekday, firstDay.low.celsius, firstDay.high.celsius, firstDay.condition, firstDay.icon_url );
			 //}		
    });
});


function initMap() {
        	var mapDiv = document.getElementById('map');
        	var map = new google.maps.Map(mapDiv, {
            		center: {lat: -36.84, lng: 174.76},
            		zoom: 8
        		});
				google.maps.event.addListener(map, 'click', function(event) {
    				var LatLng = event.latLng;
    				var lat = LatLng.lat();
    				var lng = LatLng.lng();
					alert(lng + " " + lat)
				});
      		}