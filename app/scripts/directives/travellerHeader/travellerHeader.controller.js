;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('HeaderCtrl', [
    '$scope',
    '$modal',
    '$cookies',
    '$location',
    'User',
    HeaderCtrl
]);


function HeaderCtrl($scope, $modal, $cookies, $location, User) {

  $scope.User = User;

  $scope.openModal = function(status){
    $scope.userStatus = status;
    var signupModalInstance = $modal.open({
      animation: true,
      scope: $scope,
      templateUrl: 'scripts/directives/modal/headerModal.tpl.html',
      controller: 'HeaderModalCtrl'
    });
  }

  $scope.HideDropdown = function() {
    $scope.showDropdownStatus = false;
  }

  $scope.ShowDropdown = function() {
    $scope.showDropdownStatus = true;
  }

  $scope.updateHeader = function() {
    if($cookies.get('isLoggin') && $cookies.get('username')) {
      if($cookies.get('isLoggin')) {
        $scope.isLoggin = true;
      } else {
        $scope.isLoggin = false;
      }
      $scope.loginName = $cookies.get('username');

      // if($cookies.get('is_admin') === 'true') {
      //   $scope.isAdmin = true;
      // } else {
      //   $scope.isAdmin = false;
      // }
    } else {
      $scope.isLoggin = false;
    }
  };

  $scope.logout = function(){
    User.logout();
    $scope.updateHeader();
  }
    

  $scope.updateHeader();

}

}());


