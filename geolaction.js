
  'use strict';
// Code goes here
  
var myApp = angular.module('myApp',['geolocation']);
myApp.controller('mainCtrl', function ($scope,geolocation,$timeout) {
  /*  $scope.coords = geolocation.getLocation().then(function(data){
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });*/
 
    $scope.toDo = toDO;
     function toDO(){
     $scope.coords = geolocation.getLocation().then(function(data){
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
     console.log($scope.coords);
      
    };
    $timeout(toDO(),5000);
});

