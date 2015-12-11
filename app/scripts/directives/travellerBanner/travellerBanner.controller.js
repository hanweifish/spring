;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('BannerCtrl', [
    '$scope',
    '$http',
    BannerCtrl
]);


function BannerCtrl($scope, $http) {
    $scope.tourShow = false;
    $scope.submitTour = function() {
        $scope.tourShow = true;
    }
}

}());

