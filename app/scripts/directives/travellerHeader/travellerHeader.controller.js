;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('HeaderCtrl', [
    '$scope',
    '$http',
    HeaderCtrl
]);


function HeaderCtrl($scope, $http) {

  $scope.forms = {};


  $scope.signup = function() {
    var newUserData = {
      username: $scope.forms.username,
      password: $scope.forms.password,
    };
  }

  $scope.changeStatus = function(status) {
    $scope.userStatus = status;
  }

}

}());


