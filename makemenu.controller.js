var app=angular.module('app',[]);
app.controller("makemenu",makemenu);
function makemenu( $scope, $http)
{
	var vm=this;
	vm.addDish=addDishes;
	
	vm.menudata=[];
	vm.menudata.push({
		name: "",
		price: ""
	});
	alert(vm.menudata);
	function addDishes(){
		vm.menudata.push({
		name: "",
		price: ""
		});
	}
}


