
  'use strict';
// Code goes here
  
var myApp = angular.module('myApp',['geolocation']);
myApp.controller('mainCtrl', function ($scope,geolocation,$timeout) {
    $scope.coords = geolocation.getLocation().then(function(data){
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
 
    $scope.toDo = function toDO(){
     $scope.newcoords = geolocation.getLocation().then(function(data){
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
     console.log($scope.newcoords);
      $scope.toDO();
    };
     $scope.toDO();
});

