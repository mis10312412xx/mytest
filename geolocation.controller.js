var app=angular.module('app',[]);
app.controller("g",geolocationController);
function geolocationController($scope,$http)
{
	var vm=this;
     alert(vm.longitude);
		
			
}
