;(function() {
'use strict';

/* Controllers */

angular.module('views.manage')
.controller('CityManageCtrl', [
    '$scope',
    '$http',
    'Resource',
    CityManageCtrl
]);


function CityManageCtrl($scope, $http, Resource) {
	Resource.getAllCities().then(function(res){
		$scope.cities = res.data;
		console.log(res);
	})

}

}());