;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('UserCtrl', [
    '$scope',
    '$http',
    '$cookieStore',
    'Controller',
    'toastr',
    'TourInfo',
    'User',
    UserCtrl
]);


function UserCtrl($scope, $http, $cookieStore, Controller, toastr, TourInfo, User) {
	$scope.$parent.showfooter = true;

	$scope.User = User;
    console.log(User);

}

}());