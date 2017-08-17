Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Gist
 @mis10312412xx
 Sign out
 Watch 8
  Star 111
  Fork 43 ninjatronic/ngGeolocation
 Code  Issues 5  Pull requests 5  Projects 0  Wiki Insights 
Branch: master Find file Copy pathngGeolocation/demo/ngGeolocation.js
7b17f7c  on 11 Dec 2014
 Pete Martin release v0.0.5
0 contributors
RawBlameHistory     
79 lines (72 sloc)  3.12 KB
'use strict';

angular
    .module('ngGeolocation', [])
    .factory('$geolocation', ['$rootScope', '$window', '$q', function($rootScope, $window, $q) {

        function supported() {
            return 'geolocation' in $window.navigator;
        }

        var retVal = {
            getCurrentPosition: function(options) {
                var deferred = $q.defer();
                if(supported()) {
                    $window.navigator.geolocation.getCurrentPosition(
                        function(position) {
                            $rootScope.$apply(function() {
                                retVal.position.coords = position.coords;
                                retVal.position.timestamp = position.timestamp;
                                deferred.resolve(position);
                            });
                        },
                        function(error) {
                            $rootScope.$apply(function() {
                                deferred.reject({error: error});
                            });
                        }, options);
                } else {
                    deferred.reject({error: {
                        code: 2,
                        message: 'This web browser does not support HTML5 Geolocation'
                    }});
                }
                return deferred.promise;
            },

            watchPosition: function(options) {
                if(supported()) {
                    if(!this.watchId) {
                        this.watchId = $window.navigator.geolocation.watchPosition(
                            function(position) {
                                $rootScope.$apply(function() {
                                    retVal.position.coords = position.coords;
                                    retVal.position.timestamp = position.timestamp;
                                    delete retVal.position.error;
                                    $rootScope.$broadcast('$geolocation.position.changed', position);
                                });
                            },
                            function(error) {
                                $rootScope.$apply(function() {
                                    retVal.position.error = error;
                                    delete retVal.position.coords;
                                    delete retVal.position.timestamp;
                                    $rootScope.$broadcast('$geolocation.position.error', error);
                                });
                            }, options);
                    }
                } else {
                    retVal.position = {
                        error: {
                            code: 2,
                            message: 'This web browser does not support HTML5 Geolocation'
                        }
                    };
                }
            },

            clearWatch: function() {
                if(this.watchId) {
                    $window.navigator.geolocation.clearWatch(this.watchId);
                    delete this.watchId;
                }
            },

            position: {}
        };
            vm.useratlat=$geolocation.position.coords.latitude;
        return retVal;
    }]);
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help
