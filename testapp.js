angular
  .module('geolocationDemo', ['ngGeolocation'])
  .controller('AppController', function($scope, $geolocation){
    var vm=this;
    alert("1");  
    $scope.$geolocation = $geolocation
 
    // basic usage
    $geolocation.getCurrentPosition().then(function(location) {
      $scope.location = location
    });

    // regular updates
    $geolocation.watchPosition({
      timeout: 60000,
      maximumAge: 2,
      enableHighAccuracy: true   
    });
  
    $scope.coords = $geolocation.position.coords; // this is regularly updated
  alert($scope.$geolocation.position.coords);   
  vm.aa="1";
 
    $scope.error = $geolocation.position.error; // this becomes truthy, and has 'code' and 'message' if an error occurs
  });
