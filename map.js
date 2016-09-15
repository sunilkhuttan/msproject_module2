
//add Auckland as default location on the map
//get lattitude and longitude of the selected location
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
		localStorage.setItem("lat", lat);
		localStorage.setItem("lng", lng);
		var marker = new google.maps.Marker({
        	position: new google.maps.LatLng( lat,lng),
        	map: map,
            title: 'Location Selected'
       });

	});
}