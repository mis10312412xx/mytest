var app=angular.module('app',[]);
app.controller("makemenu",makemenu);
function makemenu( $scope, $http)
{
	var vm=this;
	vm.addDishes=addDishes;
	vm.deleteDishes=deleteDishes;
	vm.menudata=[];
	vm.temp=[];
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
		if(vm.menudata[i].name!="" && i!=0)
		{
		   vm.temp.push(vm.menudata[i]);
		}
	     }
		vm.menudata=vm.temp;
	}
	
}


