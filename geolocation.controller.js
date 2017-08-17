var app=angular.module('app',[]);
app.controller("g",geolocationController);
function geolocationController( $scope, $http)
{
	var vm=this;
	alert(navigator.geolocation);
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
		    vm.lat=position.coords.latitude;
		    vm.lng=position.coords.longitude;
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation

            handleLocationError(false, infoWindow, map.getCenter());
        }
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    }
	
}
