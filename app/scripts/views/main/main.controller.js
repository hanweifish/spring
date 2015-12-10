;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers', [])
.controller('MainCtrl', [
    '$scope',
    '$http',
    MainCtrl
]);


function MainCtrl($scope, $http) {



    $scope.tourShow = false;


    $scope.tours = [
        {
            'name': '旧金山',
            'image': 'images/tour1.jpg'
        },
        {
            'name': '纽约',
            'image': 'images/tour2.jpg'
        },
        {
            'name': '圣地亚哥',
            'image': 'images/tour3.jpg'
        },
        {
            'name': '夏威夷',
            'image': 'images/tour4.jpg'
        },
        {
            'name': '拉斯维加斯',
            'image': 'images/tour5.jpg'
        },
        {
            'name': '洛杉矶',
            'image': 'images/tour6.jpg'
        }
    ];

    $scope.submitTour = function() {
        $scope.tourShow = true;
    }
}

}());