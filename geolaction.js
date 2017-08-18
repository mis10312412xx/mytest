
  'use strict';
// Code goes here

var myApp = angular.module('myApp',['geolocation']);
myApp.controller('mainCtrl', function ($scope,geolocation,$timeout) {
    $scope.coords = geolocation.getLocation().then(function(data){
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
    var toDo = function (){
     $scope.newcoords = geolocation.getLocation().then(function(data){
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
     console.log($scope.newcoords);
};
$timeout(toDo,1000)
var totest = function {

console.log("Hello World");

};

$timeout(totest,100)



原文網址：https://read01.com/RnjDyG.html
//原文網址：https://read01.com/RnjDyG.html
  
});

