;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('TourCtrl', [
    '$scope',
    '$http',
    '$modal',
    '$state',
    '$rootScope',
    'Controller',
    'TourInfo',
    'toastr',
    'User',
    'AUTH_EVENTS',
    'CitiInfo',
    '$cookieStore',
    'NgMap',
    TourCtrl
]);


function TourCtrl($scope, $http, $modal, $state, $rootScope, Controller, TourInfo, toastr, User, AUTH_EVENTS, CitiInfo, $cookieStore, NgMap) {

	$scope.TourInfo = TourInfo;
	$scope.$parent.showfooter = false;

	$scope.tours = TourInfo.itinerary.city;
	$scope.requestData = TourInfo.requestData.itinerary;

	$scope.option = {};

	if ($scope.requestData && $scope.requestData.date) {
		$scope.startDate = $scope.requestData.date.startDate.format('YYYY-MM-DD');
		$scope.endDate = $scope.requestData.date.endDate.format('YYYY-MM-DD');
		$scope.diffDate = $scope.requestData.date.endDate.diff($scope.requestData.date.startDate, 'days') + 1;
	}

	$scope.paths = _.map($scope.tours, function(tour){
		var position = new google.maps.Marker({position: tour.city.name.latLng});
		console.log(position);
		// return tour.city.name;
	})

	console.log($scope.paths);

	$scope.dragmoved = function(index) {
		$scope.tours.splice(index, 1);
	}


	getTours();
	function getTours() {
		_.each($scope.tours, function(tour){
			var id = tour.city.city_id;
			var num_days = tour.num_days;
			updatePlan(tour, id, num_days);
		})
	}

	$scope.getDays = function(){
		var totalDays = 0;
		_.each($scope.tours, function(tour){
			totalDays += tour.num_days;
		})
		return totalDays;
	}

	$scope.planPlus = function(tour){
		if ($scope.getDays() < $scope.diffDate) {
			tour.num_days++;
			updatePlan(tour, tour.city.city_id, tour.num_days);
		} else {
			toastr.error('已经达到安排日期上限');
		}
	}


	$scope.planMinus = function(tour){
		if(tour.num_days > 0) {
			tour.num_days--;
		}
		updatePlan(tour, tour.city.city_id, tour.num_days);
	}


	function updatePlan(tour, id, days) {
		$http.post(Controller.base() + 'api/spot', {
			'city_id': id,
			'num_days': days
		}).then(function(res){
			tour.plans = res.data.day_plan;
		}, function(err){
			toastr.error(err);
		})
	}


	$scope.addPlan = function() {
		TourInfo.requestData.itinerary.city = _.clone($scope.tours);

		var newCity = {
			"city": {
				"city_id": $scope.start_city_id
			}
		}
        var index = _.findIndex(TourInfo.requestData.itinerary.city, function(city) {
            return city.city.city_id === $scope.start_city_id;
        })

		if ($scope.start_city_id && index === -1) {
			TourInfo.requestData.itinerary.city.push(newCity);
			$http.post(Controller.base() + 'api/plan', TourInfo.requestData).then(function(res){
				if (res.data && res.data.status === 'SUCCESS') {
					TourInfo.itinerary = res.data.itinerary;
					$scope.tours = TourInfo.itinerary.city;
					getTours();
				} else {
					toastr.error('无法添加此城市，请选择其他城市');
					TourInfo.requestData.city = _.clone($scope.tours);
				}
				delete $scope.start_city_id;
			})

		} else {
			toastr.error('城市已经存在');
		}


	}

	$scope.deletePlan = function(tour) {
		var index = $scope.tours.indexOf(tour);
		$scope.tours.splice(index, 1);
	}

	$scope.chooseGuide = function(){

		if ($scope.getDays() !== $scope.diffDate) {
			toastr.error('安排时间和规划时间不符');
			return
		}

		if(!User.persistentData.loggedIn) {
			toastr.error('未登录，请先登录');
			$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
			return
		}

		chooseGuideFunc();
	}


	$rootScope.$on(AUTH_EVENTS.loginSuccess, function(){
		chooseGuideFunc();
	});

	function chooseGuideFunc() {
		$scope.showGuide = true;
		$scope.showMap = false;

		TourInfo.itinerary.city = $scope.tours;
		TourInfo.itinerary.start_city = $scope.tours[0].city;
		TourInfo.itinerary.end_city = $scope.tours[$scope.tours.length - 1].city;
		// console.log(JSON.stringify( TourInfo.itinerary));
		$http.post(Controller.base() + 'api/plan', {'itinerary': TourInfo.itinerary}).then(function(res){
			if(res.data.status === 'SUCCESS') {
				TourInfo.itinerary = res.data.itinerary;
				// console.log(JSON.stringify( TourInfo.itinerary));
				$http.post(Controller.base() + 'api/guide', {'itinerary': TourInfo.itinerary}).then(function(res){
					parseGuideInfo(res.data.itinerary);
					TourInfo.itineraryGroup = res.data.itinerary;
				})
			} else {
				console.log(res.data.status);
			}
		})
	}


	// Default view to show one
	$scope.chooseGuideTypeStatus = 'one';
	$scope.chooseGuideType = function(type){
		$scope.chooseGuideTypeStatus = type;
		$scope.showOrder = false;
		resetQuote();
	}

	$scope.showGuideContentStatus = false;
	$scope.toggleGuideContent = function(plan){
		plan.showGuideContentStatus = !plan.showGuideContentStatus;
	}


	function parseGuideInfo(data){
		_.each(data, function(item) {
			if (item.guide_plan_type === "ONE_GUIDE_FOR_EACH_CITY") {
				$scope.guideInfo_Multi = _.cloneDeep(item.city);
				$scope.multi_city_plan = _.cloneDeep(item.city);
			} else if(item.guide_plan_type === "ONE_GUIDE_FOR_THE_WHOLE_TRIP") {
				$scope.guideInfo = item.guide_for_whole_trip;
			}
		})
	}

	$scope.selectGuide = function(guide, index){
		if ($scope.chooseGuideTypeStatus === 'one') {
			TourInfo.itinerary = _.filter(TourInfo.itineraryGroup, function(itinerary){
				return itinerary.guide_plan_type === 'ONE_GUIDE_FOR_THE_WHOLE_TRIP';
			})[0];
			_.map(TourInfo.itinerary.city, function(city) {
				city.guide = _.cloneDeep(guide);
			})
			$scope.selectedGuide = guide;
			TourInfo.itinerary["guide_for_whole_trip"] = _.clone(guide);
			TourInfo.itinerary['choose_one_guide_solution'] = true;
		} else if ($scope.chooseGuideTypeStatus === 'multi'){
			// console.log($scope.guideInfo_Multi);
			TourInfo.itinerary = _.filter(TourInfo.itineraryGroup, function(itinerary){
				return itinerary.guide_plan_type === 'ONE_GUIDE_FOR_EACH_CITY';
			})[0];
			$scope.multi_city_plan[index].guide = guide;
			$scope.multi_city_plan[index].status = 'selected';

			TourInfo.itinerary.city = _.clone($scope.multi_city_plan);
			TourInfo.itinerary['choose_one_guide_solution'] = false;
		}
		$scope.showOrder = true;
		$scope.showMap = false;
		resetQuote();

	}


	$scope.getQuote = function(){
		$scope.quotes = [];
		if($scope.chooseGuideTypeStatus === 'multi' && !checkPlanStatus()) {
			toastr.error('请为每个城市选择一个导游');
		} else {
					// console.log(JSON.stringify( TourInfo.itinerary));
			$http.post(Controller.base() + 'api/quote', {'itinerary': TourInfo.itinerary}).then(function(res){
				if($scope.chooseGuideTypeStatus === 'one') {
					TourInfo.itinerary = _.filter(res.data.itinerary, function(itinerary){
						return itinerary.guide_plan_type === 'ONE_GUIDE_FOR_THE_WHOLE_TRIP';
					})[0];
				} else if ($scope.chooseGuideTypeStatus === 'multi'){
					TourInfo.itinerary = _.filter(res.data.itinerary, function(itinerary){
						return itinerary.guide_plan_type === 'ONE_GUIDE_FOR_EACH_CITY';
					})[0];
				}
				$scope.quotes = TourInfo.itinerary.quote.cost_usd;
				$scope.showQuoteView = true;
				$scope.quoteToPay = "预览最终行程并支付";
			}).catch(function(e){
				console.log(e);
			})
		}

	}

	function checkPlanStatus(){
		var flag = 0;
		_.each(TourInfo.itinerary.city, function(city){
			if(city.status === 'selected') {
				flag++;
			}
		})
		return flag === TourInfo.itinerary.city.length;
	}

	$scope.gotoReview = function(quote){
		TourInfo.itinerary.user_token = $cookieStore.get('token');
		$http.post(Controller.base() + 'api/booking', {"itinerary": TourInfo.itinerary}).then(function(res){
			if(res.data.status === 'SUCCESS') {
				TourInfo.itinerary = res.data.itinerary;
				$state.go('review');
			}
		}).catch(function(err){
			console.log(err);
		});

	}


	$scope.openGuideModal = function(guide){
		$scope.guideShown = guide;
	    var guideModalInstance = $modal.open({
	      animation: true,
	      scope: $scope,
	      templateUrl: 'scripts/directives/modal/guideModal.tpl.html',
	      controller: 'GuideModalCtrl',
	    });
	}

	$scope.toggleContent = function(plan){
		plan.contentStatus = !plan.contentStatus;
	}

	$scope.showMap = true;


	resetQuote();
	function resetQuote(){
		$scope.quoteToPay = "获取价格";
		$scope.showQuoteView = false;
	}

	$scope.cancelSelectedGuide = function(){
		$scope.selectedGuide = {};
		$scope.showOrder = false;
		resetQuote();
	}

	$scope.cancelGuideFromList = function(index) {
		$scope.multi_city_plan[index].status = false;
		resetQuote();
	}

	$scope.gotoStep = function(step) {
		switch(step){
			case 1:
				$scope.showMap = true;
				$scope.showOrder = false;
				$scope.showGuide = false;
				break;
			case 2:
				$scope.showMap = false;
				$scope.showOrder = false;
				$scope.showGuide = true;
		}
	}

}

}());