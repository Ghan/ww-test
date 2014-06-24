'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('mapPageCtrl', ['$scope', 'markerListService', function($scope, markerListService) {
      markerListService.fetch().then(function(data) {
          $scope.data = data;
      }); 
  }]);
