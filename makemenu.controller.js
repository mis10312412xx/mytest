var app=angular.module('app',[]);
app.controller("makemenu",makemenu);
function makemenu( $scope, $http)
{
	var vm=this;
	vm.addDishes=addDishes;
	vm.deleteDishes=deleteDishes;
	vm.c=0;
	vm.menudata=[];
	vm.menudata.push({
		name: "",
		price: ""
	});
	function addDishes(){
		vm.menudata.push({
		name: "",
		price: ""
		});
	}
	function deleteDishes(){
	     for(i in vm.menudata){
		alert(i);     
		alert(vm.menudata[i].name);
	     }
	}
	
}


