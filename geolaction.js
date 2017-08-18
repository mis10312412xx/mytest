
  'use strict';
// Code goes here

var myApp = angular.module('myApp',['geolocation']);
myApp.controller('mainCtrl', function ($scope,geolocation,$timeout) {
    $scope.coords = geolocation.getLocation().then(function(data){
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
    var toDo = function {
     $scope.newcoords = geolocation.getLocation().then(function(data){
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
     console.log($scope.newcoords);

};
$timeout(toDo,5000)

//原文網址：https://read01.com/RnjDyG.html
  
});

