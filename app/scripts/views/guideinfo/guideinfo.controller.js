;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('GuideInfoCtrl', [
    '$scope',
    '$http',
    '$modal',
    'Controller',
    'Cities',
    GuideInfoCtrl
]);


function GuideInfoCtrl($scope, $http, $modal, Controller, Cities) {
	$scope.guideform = {};

	$scope.options = {};

	$scope.options.city = Cities;

    $scope.options.has_car = [
        {
            'name': '有车',
            'value': true
        },
        {
            'name': '无车',
            'value': false
        }
    ];
    $scope.guideform.cover_city = [];

	$scope.settings = {
	    smartButtonMaxItems: 3,
	    smartButtonTextConverter: function(itemText, originalItem) {
	        return itemText;
	    },
	    scrollableHeight: '250px',
    	scrollable: true,
	};


	$scope.submit = function(){
		$scope.guideform.cover_city = _.map($scope.guideform.cover_city, function(city){
			return city.id;
		})
		console.log($scope.guideform);
		$http.post(Controller.base()+ 'api/guide_add', $scope.guideform).then(function(res){
			console.log(res);
			$scope.guideform = {};
			$scope.guideform.cover_city = [];
		})
	}
}

}());