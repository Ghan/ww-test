'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/map', {templateUrl: 'partials/map.html', controller: 'mapPageCtrl'});
  $routeProvider.otherwise({redirectTo: '/map'});
}]);
