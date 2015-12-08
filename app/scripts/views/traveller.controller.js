;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('TravellerCtrl', [
    '$scope',
    '$http',
    TravellerCtrl
]);


function TravellerCtrl($scope, $http) {

    $scope.metrics = [
        {
            'name': 'Session',
            'value': 'session'
        },
        {
            'name': 'Users',
            'value': 'users'
        },
        {
            'name': 'Pageviews',
            'value': 'pageviews'
        },
        {
            'name': 'Pages/Session',
            'value': 'pagespersession'
        },
        {
            'name': 'Avg.Session Duration',
            'value': 'duration'
        },
        {
            'name': 'Bounce Rate',
            'value': 'bouncerate'
        }
    ];
    $scope.selectedMatric = $scope.metrics[0];
    $scope.selectedMatricName = $scope.selectedMatric.name;
    $scope.selectedMatricValue = $scope.selectedMatric.value;

    $scope.showMetric = function() {
        $scope.selectedMatricValue = $scope.selectedMatric.value;
        $scope.selectedMatricName = $scope.selectedMatric.name;
    }

    $scope.dataRange = "month";
    $scope.selectDate = function(range) {
        $scope.dataRange = range;
    }

}

}());