;(function() {
'use strict';

/* Controllers */

angular.module('views.users')
.controller('BookingCtrl', [
    '$scope',
    '$http',
    "$state",
    'User',
    BookingCtrl
]);


function BookingCtrl($scope, $http, $state, User) {
	$scope.orders = _.filter(User.order, function(order){
		return order.order_status === 'WAIT_FOR_PAYMENT';
	})
	$scope.order = function(){
		$state.go('main');
	}

}

}());