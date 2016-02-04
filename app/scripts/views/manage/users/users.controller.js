;(function() {
'use strict';

/* Controllers */

angular.module('views.manage')
.controller('UserManageCtrl', [
    '$scope',
    '$http',
    'Resource',
    UserManageCtrl
]);


function UserManageCtrl($scope, $http, Resource) {
	Resource.getAllUsers().then(function(res){
		$scope.users = res.data;
		console.log(res);
	})

}

}());