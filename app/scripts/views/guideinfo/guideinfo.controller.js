;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('GuideInfoCtrl', [
    '$scope',
    '$http',
    '$modal',
    'Upload',
    'Controller',
    'Cities',
    'toastr',
    GuideInfoCtrl
]);


function GuideInfoCtrl($scope, $http, $modal, Upload, Controller, Cities, toastr) {
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


    $scope.upload = function (dataUrl) {

    	if (!$scope.picFile){
    		toastr.error("请选择正确文件");
    		return;
    	}
        Upload.upload({
            url: Controller.base() + 'api/upload',
            data: {
                file: Upload.dataUrltoBlob(dataUrl),
            },

        }).then(function (res) {
        	$timeout(function () {
                $scope.result = response.data;
                toastr.success("文件上传成功");
            });
        }, function (err) {
            $scope.errorMsg = err;
        });
    }


    $scope.uploadFiles = function(files, errFiles) {
        $scope.files = files;
        $scope.errFiles = errFiles;
        angular.forEach(files, function(file) {
            file.upload = Upload.upload({
                url: Controller.base() + 'api/upload',
                data: {file: file}
            });
            file.upload.then(function (response) {
	        	$timeout(function () {
	                $scope.result = response.data;
	                toastr.success("文件上传成功");
	            });
            }, function (err) {
            	$scope.errorMsg = err;
        	});
        });
    }

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