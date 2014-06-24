'use strict';

/* Services */

angular.module('myApp.services', [])
    .factory('markerListService', function($q, $timeout, $http) {
        return {
            fetch: function() {
                var deferred = $q.defer();
                $timeout(function() {
                    $.getJSON("fixtures/positions.json", function( data ) {
                        deferred.resolve(data);
                    });
                }, 0);
                return deferred.promise;
            }
        }
    });
