;(function() {
'use strict';

/* Controllers */

angular.module('views.users')
.controller('InfoCtrl', [
    '$scope',
    '$http',
    '$cookieStore',
    '$rootScope',
    'Controller',
    'AUTH_EVENTS',
    'toastr',
    'TourInfo',
    'User',
    InfoCtrl
]);


function InfoCtrl($scope, $http, $cookieStore, $rootScope, Controller, AUTH_EVENTS, toastr, TourInfo, User) {

	$scope.option = {};
	$scope.resetPwd = false;

	$scope.user_info = User.user_info;
	$scope.reset = function(){
		$scope.resetPwd = true;
	}


	$scope.submit = function(){
		if($cookieStore.get('isLoggin') && $cookieStore.get('token')) {
			$scope.option.token = $cookieStore.get('token');
		} else {
			$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
			return;
		}

		if($scope.option.new_password !== $scope.option.new_password_again) {
			toastr.error('两次密码输入不一致，请重新输入');
			return;
		}

		if(!$scope.option.current_password || !$scope.option.new_password || !$scope.option.new_password_again) {
			toastr.error('密码不能为空');
			return;
		}

		$http.post(Controller.base() + 'api/changepasswd', $scope.option).then(function(res){
			console.log(res);
			if(res.data.status === 'SUCCESS') {
				toastr.success('密码修改成功');
			} else {
				toastr.error('密码修改失败，请重试')
			}
			$scope.option = {};
			$scope.resetPwd = false;
		})

	}
}

}());