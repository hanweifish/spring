;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('HeaderCtrl', [
    '$scope',
    '$http',
    'User',
    HeaderCtrl
]);


function HeaderCtrl($scope, $http, User) {

  $scope.forms = {};

  $scope.forms.user = 'test';
  $scope.forms.email = 'test@gmail.com';
  $scope.forms.password = 'test';

  $scope.signup = function() {
    var fomrs = _.clone($scope.forms);

    User.signup(fomrs)
        .then(function() {
            console.log('success');
        })
        .catch(function(e) {

        })
        .finally(function() {

        });
  }


  $scope.login = function() {
    var fomrs = _.clone($scope.forms);
        console.log(fomrs);
    var url = 'http://106.184.1.83:8080/login';
  }


  $scope.changeStatus = function(status) {
    $scope.userStatus = status;
  }

}

}());


