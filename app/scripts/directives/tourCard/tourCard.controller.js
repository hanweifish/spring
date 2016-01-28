;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('TourCardCtrl', [
    '$scope',
    '$http',
    '$state',
    'TourInfo',
    'CitiInfo',
    TourCardCtrl
]);


function TourCardCtrl($scope, $http, $state, TourInfo, CitiInfo) {
	$scope.gotopay = function(order){
		TourInfo.itinerary = order.itinerary;
		$state.go('review');
	}

}

}());

