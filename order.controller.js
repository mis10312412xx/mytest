var app=angular.module('app',[]);
app.controller("order",order);
function order( $scope, $http)
{
	var vm=this;
	vm.addDishes=addDishes;
	vm.deleteDishes=deleteDishes;
	vm.saveDishes=saveDishes;
	vm.orderdata=[];
	vm.temp=[];
	vm.savestate="y";
	vm.orderdata.push({
		name: "",
		price: "",
		num: ""
	});
	function addDishes(){
		vm.orderdata.push({
		name: "",
		price: "",
		num: ""
		});
	}
	function deleteDishes(index){
		vm.temp=[];
	     for(i in vm.orderdata){
		if(i!=index){
		   vm.temp.push(vm.orderdata[i]);
		}
	     }
		vm.orderdata=vm.temp;
	}
	function saveDishes(){
	  for(i in vm.orderdata){
		if(vm.orderdata[i].num==""){
		     vm.savestate="n";
		  
		}
	     }
		if(vm.savestate=="y"){
		 	alert("儲存成功");
		}else{
			alert("有欄位還沒填");
			vm.savestate="y";
		}
		
	}
}
