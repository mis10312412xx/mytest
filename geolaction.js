
  'use strict';
// Code goes here
  
var myApp = angular.module('myApp',['geolocation']);
myApp.controller('mainCtrl', function ($scope,geolocation,$interval) {
  /*  $scope.coords = geolocation.getLocation().then(function(data){
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });*/
    $scope.coords = geolocation.getLocation().then(function(data){
      $scope.lat=data.coords.latitude; $scope.lng=data.coords.longitude;
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
    $scope.toDo = toDO;
     function toDO(){
     $scope.coords = geolocation.getLocation().then(function(data){
       $scope.lat=data.coords.latitude; $scope.lng=data.coords.longitude;
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
     console.log($scope.lat);
     console.log($scope.lng);
    };
   $interval(toDO,1000);
});

