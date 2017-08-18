
  'use strict';
// Code goes here
  
var myApp = angular.module('myApp',['geolocation']);
myApp.controller('mainCtrl', function ($scope,geolocation,$interval,$window) {
  /*  $scope.coords = geolocation.getLocation().then(function(data){
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });*/
    $scope.toDo = toDO;
    $scope.Rad=Rad;
      function Rad(d){
       return d * Math.PI / 180.0;//经纬度转换成三角函数中度分表形式。
    }
    $scope.stolat=22.6395202; 
    $scope.stolng=120.3215537;
    $scope.EARTH_RADIUS = 6378137;//赤道半径(单位m)
    $scope.range=0;
    $scope.coords = geolocation.getLocation().then(function(data){
      $scope.lat=data.coords.latitude; $scope.lng=data.coords.longitude;
      $scope.rlatp=Rad($scope.stolat)-Rad($scope.lat);
      //$scope.rlngp=($scope.stolng-$scope.lng)*($scope.stolng-$scope.lng);
      //$scope.range=$window.Math.sqrt($scope.rlatp+$scope.rlngp);
      
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
    $scope.toDo = toDO;
     function toDO(){
     $scope.coords = geolocation.getLocation().then(function(data){
       $scope.lat=data.coords.latitude; $scope.lng=data.coords.longitude;
       //$scope.rlatp=($scope.stolat-$scope.lat)*($scope.stolat-$scope.lat);
      //$scope.rlngp=($scope.stolng-$scope.lng)*($scope.stolng-$scope.lng);
      //$scope.range=$window.Math.sqrt($scope.rlatp+$scope.rlngp);
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
     console.log($scope.lat);
     console.log($scope.lng);
       console.log($scope.rlatp);
       //console.log($scope.rlngp);
       //console.log($scope.range);
    };
   $interval(toDO,1000);
});

