'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('mapPageCtrl', ['$scope', 'markerListService', function($scope, markerListService) {
      $scope.ids = [];
      $scope.filteredID = 0;
      $scope.data;
      $scope.markers = [];
      $scope.fromDate = null;
      $scope.toDate = null;
      
      markerListService.fetch().then(function(data) {
          $scope.data = data;
          for (var i = 0; i < data.length; i++){
              createMarker(data[i]);
              if($.inArray(data[i].positionable_id, $scope.ids) === -1){
                $scope.ids.push(data[i].positionable_id);
              }
              // {"positionable_id":272,"latitude":"40.7633078524","longitude":"-73.9674413711","speed":null,"heading":"-1.0","created_at":"2014-04-22T20:00:03.000-04:00"}
          }
      });
      
      $scope.$watchCollection('[filteredID, fromDate, toDate]', function() {
        if($scope.filteredID > 0){
          resetMap($scope.filteredID, $scope.fromDate, $scope.toDate);
        } else {
          resetMap("all", $scope.fromDate, $scope.toDate);
        }
      });
      
      var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(40.7550624, -73.9634123)    
      };

      $scope.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      var infoWindow = new google.maps.InfoWindow();

      var createMarker = function (info){
        var iconPath = 'https://maps.gstatic.com/intl/en_ALL/mapfiles/markers2/measle.png';

        var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.latitude, info.longitude),
                title: info.positionable_id.toString(),
                icon: iconPath
        });
        
        marker.setValues({speed: info.speed, heading: info.heading, created_at: info.created_at});

        $scope.markers.push(marker);
      }

      $scope.clearValues = function(){
        $scope.fromDate = null;
        $scope.toDate = null;
        $scope.filteredID = 0;
      }
      
      var resetMap = function(id, from, to){
        var fromDate = (from) ? new Date(from) : new Date('01/01/1900');
        var toDate = (to) ? new Date(to) : Date.now();

        for(var i = 0; i < $scope.markers.length; i++){
          $scope.markers[i].setMap(null);
          var mDate = new Date($scope.markers[i].get("created_at"));
          if(($scope.markers[i].title === id || id === "all") && (mDate > fromDate && mDate < toDate)){
            $scope.markers[i].setMap($scope.map);
          }
        }
      }

      $("#date-from").datepicker();
      $("#date-to").datepicker();
  }]);