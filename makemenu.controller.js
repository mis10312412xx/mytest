var app=angular.module('app',[]);
app.controller("makemenu",makemenu);
function makemenu( $scope, $http)
{
	var vm=this;
	vm.menudata=[];
	//vm.allgif="";
	vm.menudata.push({
		name: "",
		price: ""
	});
}


