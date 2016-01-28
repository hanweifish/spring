;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('ResetPwdCtrl', [
    '$scope',
    '$http',
    '$location',
    '$modal',
    '$state',
    'Controller',
    'TourInfo',
    'toastr',
    'User',
    ResetPwdCtrl
]);


function ResetPwdCtrl($scope, $http, $location, $modal, $state, Controller, TourInfo, toastr, User) {
	$scope.$parent.showfooter = true;

	$scope.submit = function(){
		if($scope.new_password !== $scope.new_password_again) {
			toastr.error('两次密码输入不一致')
		} else {
			var obj = {
				"token": $location.url().split('resetToken=')[1],
				"password": $scope.new_password
			}
			 User.resetPassword(obj)
		    .then(function(res) {
		      if(res.status === 'SUCCESS') {
		        toastr.success('密码重置成功!');
		        $state.go('main');
		      } else {
		        toastr.error('密码重置失败，请重试!');
		      }
		    })
		}
	}
}

}());