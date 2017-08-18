
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
      $scope.rlatp=($scope.stolat-$scope.lat)*($scope.stolat-$scope.lat);
      $scope.rlngp=($scope.stolng-$scope.lng)*($scope.stolng-$scope.lng)
      $scope.range=$window.Math.round($window.Math.sqrt($scope.rlatp+$scope.rlngp),3);
      
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
    $scope.toDo = toDO;
     function toDO(){
     $scope.coords = geolocation.getLocation().then(function(data){
       $scope.lat=data.coords.latitude; $scope.lng=data.coords.longitude;
       $scope.rlatp=($scope.stolat-$scope.lat)*($scope.stolat-$scope.lat);
      $scope.rlngp=($scope.stolng-$scope.lng)*($scope.stolng-$scope.lng)
      $scope.range=$window.Math.round($window.Math.sqrt($scope.rlatp+$scope.rlngp),3);
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
     console.log($scope.lat);
     console.log($scope.lng);
       console.log($scope.rlatp);
         console.log($scope.rlngp);
    };
   $interval(toDO,1000);
});

