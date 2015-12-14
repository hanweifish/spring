;(function() {
'use strict';

angular.module('app.views', ['ui.router'])
.config([
    '$stateProvider',
    DashboardConfig
]);

function DashboardConfig ($stateProvider) {

	$stateProvider.state('main', {
        url: '/main',
		templateUrl: 'scripts/views/main/main.tpl.html',
        controller: 'MainCtrl'
    });

    $stateProvider.state('user', {
        url: '/user',
		templateUrl: 'scripts/views/user/user.tpl.html',
        controller: 'UserCtrl'
    });

    $stateProvider.state('userLogin', {
        url: '/user/snsLogin*',
        templateUrl: 'scripts/views/user/userLogin.tpl.html',
        controller: 'UserLoginCtrl'
    });

}

}());
