;(function() {
'use strict';

angular.module('app')
.config([
    '$stateProvider',
    '$httpProvider',
    '$urlRouterProvider',
    '$resourceProvider',
    AppConfig
])

function AppConfig ($stateProvider, $httpProvider, $urlRouterProvider, $resourceProvider) {
    // Setting default route to display dashboard
    $urlRouterProvider.otherwise('/main');


    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    // push interceptor
    // $httpProvider.interceptors.push('ApiInterceptor');

}

}());