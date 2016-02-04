;(function() {
'use strict';

/* Controllers */

angular.module('views.manage')
.controller('SpotManageCtrl', [
    '$scope',
    '$http',
    'Resource',
    SpotManageCtrl
]);


function SpotManageCtrl($scope, $http, Resource) {
	Resource.getAllSpots().then(function(res){
		$scope.spots = res.data;
		console.log(res);
	})

}

}());