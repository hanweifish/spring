;(function() {
'use strict';

/* Controllers */

angular.module('views.manage')
.controller('GuideManageCtrl', [
    '$scope',
    '$http',
    'Resource',
    GuideManageCtrl
]);


function GuideManageCtrl($scope, $http, Resource) {
	Resource.getAllGuides().then(function(res){
		$scope.guides = res.data;
		console.log(res);
	})

}

}());