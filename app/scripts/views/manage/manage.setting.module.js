;(function() {
'use strict';

angular.module('views.manage', [])
.config([
    '$stateProvider',
    viewsManageConfig
]);

function viewsManageConfig($stateProvider) {
    // parent view
    $stateProvider.state('manage', {
        url: '/manage',
        templateUrl: 'scripts/views/manage/manage.tpl.html',
        controller: 'ManageCtrl'
    });


    $stateProvider.state('manage.guides', {
        url: '/guides',
        templateUrl: 'scripts/views/manage/guides/guides.tpl.html',
        controller: 'GuideManageCtrl'
    });


    $stateProvider.state('manage.cities', {
        url: '/cities',
        templateUrl: 'scripts/views/manage/cities/cities.tpl.html',
        controller: 'CityManageCtrl'
    });

    $stateProvider.state('manage.spots', {
        url: '/spots',
        templateUrl: 'scripts/views/manage/spots/spots.tpl.html',
        controller: 'SpotManageCtrl'
    });


    $stateProvider.state('manage.orders', {
        url: '/orders',
        templateUrl: 'scripts/views/manage/orders/orders.tpl.html',
        controller: 'OrderManageCtrl'
    });

    $stateProvider.state('manage.bookings', {
        url: '/bookings',
        templateUrl: 'scripts/views/manage/bookings/bookings.tpl.html',
        controller: 'BookingManageCtrl'
    });

    $stateProvider.state('manage.users', {
        url: '/users',
        templateUrl: 'scripts/views/manage/users/users.tpl.html',
        controller: 'UserManageCtrl'
    });


}

}());
