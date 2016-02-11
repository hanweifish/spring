;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('BannerCtrl', [
    '$scope',
    '$http',
    '$state',
    'toastr',
    'Controller',
    'Itinerary',
    'CitiInfo',
    BannerCtrl
]);


function BannerCtrl($scope, $http, $state, toastr, Controller, Itinerary, CitiInfo) {

	$scope.options = {};

	CitiInfo.getList().then(function(){
		$scope.options.city = CitiInfo.children;
	});

	$scope.datePicker = {
		date: {startDate: null, endDate: null}
	};


    $scope.tourShow = false;
	$scope.tourForm = {};

	$scope.options.people = [
		{
			name: 1,
			id: '1'
		},
		{
			name: 2,
			id: '1'
		},
		{
			name: 3,
			id: '3'
		},
		{
			name: 4,
			id: '4'
		},
		{
			name: 5,
			id: '5'
		},
		{
			name: 6,
			id: '6'
		},
		{
			name: 7,
			id: '7'
		},
		{
			name: 8,
			id: '8'
		},
		{
			name: 9,
			id: '9'
		},
		{
			name: 10,
			id: '10'
		},
	];

	$scope.options.room = _.clone($scope.options.people);

	$scope.options.topic = [
		{
			name: '家庭',
			id: '家庭'
		},
		{
			name: '蜜月',
			id: '蜜月'
		},
		{
			name: '商务',
			id: '商务'
		},
		{
			name: '浪漫',
			id: '浪漫'
		}
	];

	$scope.options.hotel = [
		{
			name: '五星级',
			id: '5'
		},
		{
			name: '四星级',
			id: '4'
		},
		{
			name: '三星级',
			id: '3'
		},
		{
			name: '两星级',
			id: '2'
		},
		{
			name: '一星级',
			id: '1'
		}
	];




    $scope.submitTour = function() {
    	var obj = {};

    	obj.city = _.clone($scope.tourForm.city_plan);

   //  	var index_start = obj.city.indexOf($scope.tourForm.start_city_id);
   //  	if(index_start > -1) {
   //   		obj.city.splice(index_start, 1);
   //  	}

   //  	var index_end = obj.city.indexOf($scope.tourForm.end_city_id);
   //  	if(index_end > -1) {
   //   		obj.city.splice(index_end, 1);
   //  	}

   //  	if ($scope.tourForm.start_city_id) {
			// obj.city.unshift($scope.tourForm.start_city_id);
   //  	} else {
   //  		toastr.error('请选择入境城市!');
   //  		return
   //  	}

   //  	if ($scope.tourForm.end_city_id) {
			// obj.city.push($scope.tourForm.end_city_id);
   //  	} else {
   //  		toastr.error('请选择出境城市!');
   //  		return
   //  	}

   //  	if ($scope.datePicker.date.startDate && $scope.datePicker.date.endDate) {
	  //   	obj.start_date = parseInt($scope.datePicker.date.startDate.format('x'));
	  //   	obj.end_date = parseInt($scope.datePicker.date.endDate.format('x'));
   //  	}

   //  	if ($scope.tourForm.num_people){
   //  		obj.num_people = parseInt($scope.tourForm.num_people);
   //  	} else {
   //  		toastr.error('请选择出行人数!');
   //  		return
   //  	}

   //  	if ($scope.tourForm.num_room){
   //  		obj.num_room = parseInt($scope.tourForm.num_room);
   //  	} else {
   //  		toastr.error('请选择酒店房间!');
   //  		return
   //  	}

   //  	if ($scope.tourForm.topic){
   //  		obj.selected_tag = $scope.tourForm.topic;
   //  	} else {
   //  		toastr.error('请选择旅游主题!');
   //  		return
   //  	}
 

   //  	if ($scope.tourForm.hotel){
   //  		obj.hotel = parseInt($scope.tourForm.hotel);
   //  	} else {
   //  		toastr.error('请选择酒店星级!');
   //  		return
   //  	}

   //  	console.log(JSON.stringify(obj));
    	var obj = {"city":["56b45d951a0b847ff8eedc7d","56b45d951a0b847ff8eedc89","56b45d951a0b847ff8eedc8b","56b45d951a0b847ff8eedc88"],"start_date":1455091200000,"end_date":1456387199999,"num_people":3,"num_room":1,"selected_tag":"家庭","hotel":5};    	$http.post(Controller.base() + 'api/plan', obj).then(function(res){
			toastr.success('订制成功!');
			Itinerary.children = res.data;
			console.log(res);
			Itinerary.getCityInfo()
				.then(Itinerary.getSpots())
				.then(function(){
					$state.go('tour');
				})
		})
		.catch(function(err){
			console.log(err);
			toastr.error('订制失败，请重新尝试');
		})

    }

    $scope.$watchCollection('datePicker', function(val){
	    if (val && val.date && val.date.startDate && val.date.endDate) {
				$scope.dateDiff = val.date.endDate.diff(val.date.startDate, 'days') + 1;
	    	}
    })

    //For Date Picker
	$scope.myDate = new Date();

	$scope.minDate = new Date(
	  $scope.myDate.getFullYear(),
	  $scope.myDate.getMonth() - 2,
	  $scope.myDate.getDate());

	$scope.maxDate = new Date(
	  $scope.myDate.getFullYear(),
	  $scope.myDate.getMonth() + 2,
	  $scope.myDate.getDate());

	$scope.onlyWeekendsPredicate = function(date) {
		var day = date.getDay();
		return day === 0 || day === 6;
	}

}

}());