var app=angular.module('app',[]);
app.controller("g",geolocationController);
function geolocationController( $scope, $http)
{
	var vm=this;
	
	 // default map options
    var mapOptions = {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 17
    };

    vm.map = new google.maps.Map(document.getElementById('map'), mapOptions);

   vm.loadMap = function() {
        // set client position 
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
              
                vm.map.setCenter(pos);
              
                // set marker 
                var marker = new google.maps.Marker({
                    position: pos,
                    map: vm.map
                });

                var contentString = '<h2>Hey, Here I am.<h2>';
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });
              
                // set marker click event 
                marker.addListener('click', function() {
                    infowindow.open(vm.map, marker);
                });

            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            handleLocationError(false, infoWindow, map.getCenter());
        }
    };

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    }/*
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
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
    }*/
	
}
