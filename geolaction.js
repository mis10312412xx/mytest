
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
    $scope.stolng=120.3275649;
    $scope.range=0;
    $scope.ezrange=0;
    $scope.coords = geolocation.getLocation().then(function(data){
      $scope.lat=data.coords.latitude; $scope.lng=data.coords.longitude;
      $scope.rlat=Rad($scope.stolat)-Rad($scope.lat);  $scope.ezrlat=($scope.stolat-$scope.lat)*($scope.stolat-$scope.lat);
      $scope.rlng=Rad($scope.stolng)-Rad($scope.lng);  $scope.ezrlng=($scope.stolng-$scope.lng)*($scope.stolng-$scope.lng);
       $scope.ezrang=$window.Math.sqrt($scope.ezrlat+$scope.ezrlng);
       $scope.range = 2 * $window.Math.asin($window.Math.sqrt($window.Math.pow($window.Math.sin($scope.rlat/2),2) +
        $window.Math.cos(Rad($scope.stolat))*$window.Math.cos(Rad($scope.lat))*$window.Math.pow($window.Math.sin($scope.rlng/2),2)));
        $scope.range = $scope.range*6378137; //公尺
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
    $scope.toDo = toDO;
     function toDO(){
     $scope.coords = geolocation.getLocation().then(function(data){
       $scope.lat=data.coords.latitude; $scope.lng=data.coords.longitude;
        $scope.rlat=Rad($scope.stolat)-Rad($scope.lat);  $scope.ezrlat=($scope.stolat-$scope.lat)*($scope.stolat-$scope.lat);
        $scope.rlng=Rad($scope.stolng)-Rad($scope.lng);  $scope.ezrlng=($scope.stolng-$scope.lng)*($scope.stolng-$scope.lng);
        $scope.range = 2 * $window.Math.asin($window.Math.sqrt($window.Math.pow($window.Math.sin($scope.rlat/2),2) +
        $window.Math.cos(Rad($scope.stolat))*$window.Math.cos(Rad($scope.lat))*$window.Math.pow($window.Math.sin($scope.rlng/2),2)));
        $scope.range = $scope.range*6378.137*1000; //公尺
        $scope.ezrang=$window.Math.sqrt($scope.ezrlat+$scope.ezrlng);
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
     console.log($scope.lat);
     console.log($scope.lng);
       console.log($scope.range);
       console.log($scope.ezrange);
    };
   $interval(toDO,1000);
});

