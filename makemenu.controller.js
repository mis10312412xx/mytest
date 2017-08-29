var app=angular.module('app',[]);
app.controller("makemenu",makemenu);
app.factory('fileReader', ["$q", "$log", function($q, $log){
                var onLoad = function(reader, deferred, scope) {
                    return function () {
                        scope.$apply(function () {
                            deferred.resolve(reader.result);
                        });
                    };
                };
         
                var onError = function (reader, deferred, scope) {
                    return function () {
                        scope.$apply(function () {
                            deferred.reject(reader.result);
                        });
                    };
                };
         
                var getReader = function(deferred, scope) {
                    var reader = new FileReader();
                    reader.onload = onLoad(reader, deferred, scope);
                    reader.onerror = onError(reader, deferred, scope);
                    return reader;
                };
         
                var readAsDataURL = function (file, scope) {
                    var deferred = $q.defer();
                    var reader = getReader(deferred, scope);         
                    reader.readAsDataURL(file);
                    return deferred.promise;
                };
         
                return {
                    readAsDataUrl: readAsDataURL  
                };
            }])
app.directive('fileModel', ['$parse', function ($parse) {
                return {
                    restrict: 'A',
                    link: function(scope, element, attrs, ngModel) {
                        var model = $parse(attrs.fileModel);
                        var modelSetter = model.assign;
                        element.bind('change', function(event){
                            scope.$apply(function(){
                                modelSetter(scope, element[0].files[0]);
                            });
                            //附件预览
                                 scope.file = (event.srcElement || event.target).files[0];
                            scope.getFile();
                        });
                    }
                };
            }]);
function makemenu( $scope, $http, fileReader)
{
	var vm=this;
	 $scope.getFile = function () {
                    fileReader.readAsDataUrl($scope.file, $scope)
                                  .then(function(result) {
                                      $scope.imageSrc = result;
                                  });
                };
	// 组装表单数据
                var postData = {
                    vacationType: $scope.leave.type,
                    reason: $scope.leave.reason,
                    familyRelation: +$scope.leave.type == 7 ? $scope.leave.relation : "",
                    startTime: startTime,
                    endTime: endTime,
                    fileName: $scope.myFile,
                    workDelivers: workDelivers,
                    ccmailNickNames: sendPersons,
                    realDays: +$scope.leave.type == 8 ? $scope.leave.timeLong : ""
                };

                var promise = postMultipart('https://github.com/mis10312412xx/mytest/blob/master/image', postData); 

                function postMultipart(url, data) {
                    var fd = new FormData();
                    angular.forEach(data, function(val, key) {
                        fd.append(key, val);
                    });
                    var args = {
                        method: 'POST',
                        url: url,
                        data: fd,
                        headers: {'Content-Type': undefined},
                        transformRequest: angular.identity
                    };
                    return $http(args);
                }
}


