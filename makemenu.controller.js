var app=angular.module('app',[]);
app.controller("makemenu",makemenu);
function makemenu( $scope, $http)
{
	var vm=this;
	
	vm.prmType = "";
	vm.timeLim="1";
	vm.prmStTime="";
	vm.prmEdTime="";
	vm.editdata=[];
	vm.gift=[];
	//vm.allgif="";
	vm.gift.push({
		giftname: "",
		giftnum: ""
	});
	vm.addgift=addgift;
	vm.addsub=addsub;
	vm.editsub=editsub;
	vm.show1="1";
	vm.show2="";
	vm.show3="";
	vm.id={ID:"1234"};
	//vm.data;
		vm.backViewCoupon=backViewCoupon;
		vm.addCoupon=addCoupon;
		vm.editCoupon=editCoupon;
		vm.deleteCoupon=deleteCoupon;
	
		//開addCoupon頁面
		function addCoupon(){
		  vm.show1="";
		  vm.show2="1";
		  vm.show3="";
		  vm.gift=[];
			//vm.allgif="";
			vm.gift.push({
				giftname: "",
				giftnum: ""
			});
		}
		//開editCoupon頁面
		function editCoupon(i){
		  vm.show1="";
		  vm.show2="";
		  vm.show3="1";
		  vm.gift=[];
		  //vm.allgif="";
		  vm.gift.push({
				giftname: "",
				giftnum: ""
		  });
		  vm.editdata=[];
		  vm.editdata=i;
		  vm.edprmID=vm.editdata.prmID;
		}
		//刪除
		function deleteCoupon(i){
			
		}
		//回前頁
		function backViewCoupon()
		{
		 $window.location.reload();
		}
		//新增贈品
		function addgift(){
			vm.gift.push({
				giftname: "",
				giftnum: ""
			});
			temp = vm.gift;
			vm.gift = [];
			vm.gift = temp;
		}
		//新增
		function addsub(){
			
			
		}
		//修改
		function editsub(){
			
		}
	
	
}


