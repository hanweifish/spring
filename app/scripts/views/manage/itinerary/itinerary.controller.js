;(function() {
'use strict';

/* Controllers */

angular.module('views.manage')
.controller('ItineraryManageCtrl', [
    '$scope',
    '$http',
    'Resource',
    ItineraryManageCtrl
]);


function ItineraryManageCtrl($scope, $http, Resource) {
	// Resource.getAllGuides().then(function(res){
	// 	$scope.guides = res.data;
	// 	console.log(res);
	// })

}

}());