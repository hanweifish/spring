;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('ManageCtrl', [
    '$scope',
    '$http',
    ManageCtrl
]);


function ManageCtrl($scope, $http) {
	$scope.$parent.showfooter = true;

    // $scope.User = User;
}

}());