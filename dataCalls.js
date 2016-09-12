

$(document).on('click', '#search', function() {
  
		 $.get("http://api.wunderground.com/api/70d544f28782df8e/forecast10day/q/CA/San_Francisco.json", function(data, status){
			 
			 var forecast = data.forecast;
			 var simple = forecast.simpleforecast;
			 var forEachDay = simple.forecastday;
			 alert(forEachDay.length);
		
    });
});