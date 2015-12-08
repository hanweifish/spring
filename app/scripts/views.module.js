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
		templateUrl: 'scripts/views/main.tpl.html',
        controller: 'MainCtrl'
    });

    $stateProvider.state('traveller', {
        url: '/traveller',
		templateUrl: 'scripts/views/traveller.tpl.html',
        controller: 'TravellerCtrl'
    });
}

}());
