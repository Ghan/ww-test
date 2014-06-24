'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('mapPageCtrl', ['$scope', 'markerListService', function($scope, markerListService) {
      markerListService.fetch().then(function(data) {
          $scope.data = data;
          for (var i = 0; i < data.length; i++){
              createMarker(data[i]);
              // {"positionable_id":272,"latitude":"40.7633078524","longitude":"-73.9674413711","speed":null,"heading":"-1.0","created_at":"2014-04-22T20:00:03.000-04:00"}
          }
      }); 
      
      var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(40.7550624, -73.9634123),
        mapTypeId: google.maps.MapTypeId.TERRAIN    
      };

      $scope.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      $scope.markers = [];

      var infoWindow = new google.maps.InfoWindow();

      var createMarker = function (info){
        var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.latitude, info.longitude),
                title: info.positionable_id.toString()
        });
        
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

        google.maps.event.addListener(marker, 'click', function(){
          infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
          infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);
      }

      $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
      }
  }]);