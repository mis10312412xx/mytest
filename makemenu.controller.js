var app=angular.module('app',[]);
app.controller("makemenu",makemenu);
function makemenu( $scope, $http)
{
	var vm=this;
	vm.addDishes=addDishes;
	vm.deleteDishes=deleteDishes;
	vm.saveDishes=saveDishes;
	vm.menudata=[];
	vm.temp=[];
	vm.savestate="y";
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
	function deleteDishes(index){
		vm.temp=[];
	     for(i in vm.menudata){
		if(i!=index){
		   vm.temp.push(vm.menudata[i]);
		}
	     }
		vm.menudata=vm.temp;
	}
	function saveDishes(){
	  for(i in vm.menudata){
		if(vm.menudata[i].name=="" || vm.menudata[i].price==""){
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


