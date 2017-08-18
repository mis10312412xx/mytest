
  'use strict';
// Code goes here
  
var myApp = angular.module('myApp',['geolocation']);
myApp.controller('mainCtrl', function ($scope,geolocation,$interval,$window) {
  /*  $scope.coords = geolocation.getLocation().then(function(data){
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });*/
    $scope.stolat=22.6395202;
    $scope.stolat=120.3215537;
    $scope.range=0;
    $scope.coords = geolocation.getLocation().then(function(data){
      $scope.lat=data.coords.latitude; $scope.lng=data.coords.longitude;
      $scope.range=$window.Math.sqrt(($scope.stolat-$scope.lat)*($scope.stolat-$scope.lat));
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
    $scope.toDo = toDO;
     function toDO(){
     $scope.coords = geolocation.getLocation().then(function(data){
       $scope.lat=data.coords.latitude; $scope.lng=data.coords.longitude;
       //$scope.range=$window.Math.sqrt(($scope.stolat-$scope.lat)*($scope.stolat-$scope.lat)-($scope.stolng-$scope.lng)*($scope.stolng-$scope.lng));
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
     console.log($scope.lat);
     console.log($scope.lng);
    };
   $interval(toDO,1000);
});

