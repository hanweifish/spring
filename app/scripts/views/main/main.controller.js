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


    $scope.features = [
        {
            'title': '线路定制',
            'icon': 'fa-plane',
            'content': '想要自由掌控行程节奏？喜欢与众不同的游玩路线？我们能满足旅行中的各种小任性，同时让你享受最划算的价格.'
        },
        {
            'title': '导游定制',
            'icon': 'fa-user',
            'content': '想要自由掌控行程节奏？喜欢与众不同的游玩路线？我们能满足旅行中的各种小任性，同时让你享受最划算的价格.'
        },
        {
            'title': '用户定制',
            'icon': 'fa-suitcase',
            'content': '想要自由掌控行程节奏？喜欢与众不同的游玩路线？我们能满足旅行中的各种小任性，同时让你享受最划算的价格.'
        }
    ];

    $scope.corps = [
        {
            'name': '微博平台'
        },
        {
            'name': '微博平台'
        },
        {
            'name': '微博平台'
        },
        {
            'name': '微博平台'
        },
        {
            'name': '微博平台'
        },
    ]



    $scope.submitTour = function() {
        $scope.tourShow = true;
    }
}

}());