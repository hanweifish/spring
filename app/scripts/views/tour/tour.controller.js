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
    '$filter',
    'Controller',
    'Itinerary',
    'toastr',
    'User',
    'AUTH_EVENTS',
    'CitiInfo',
    '$cookieStore',
    'NgMap',
    TourCtrl
]);


function TourCtrl($scope, $http, $modal, $state, $rootScope, $filter, Controller, Itinerary, toastr, User, AUTH_EVENTS, CitiInfo, $cookieStore, NgMap) {

	$scope.$parent.showfooter = false;

	$scope.itinerary = Itinerary.children;
	$scope.tours = Itinerary.children.city_plan;


	$scope.sugguest_cities = _.map(Itinerary.children.sugguest_cities, function(id){
		return CitiInfo.getCitybyId(id);
	});
	

	$scope.option = {};

	if ($scope.itinerary.start_date  && $scope.itinerary.end_date) {
        var difference = $scope.itinerary.end_date - $scope.itinerary.start_date;

        $scope.diffDate = Math.floor(difference/1000/60/60/24);
	}

	$scope.paths = _.map($scope.tours, function(tour){
		if(tour.city) {
			return tour.city.name;
		}
	})

	$scope.dragmoved = function(index) {
		$scope.tours.splice(index, 1);
	}


	$scope.getDays = function(){
		var totalDays = 0;
		_.each($scope.tours, function(tour){
			totalDays += tour.allocate_days;
		})
		return totalDays;
	}


	$scope.planPlus = function(tour){
		if ($scope.getDays() < $scope.diffDate) {
			tour.allocate_days++;
			Itinerary.getSpot(tour.city.id, tour.allocate_days, $scope.itinerary.selected_tag).then(function(res){
				tour.spots = res.data;
			});
		} else {
			toastr.error('您的日程已经安排满');
		}
	}


	$scope.planMinus = function(tour){
		if(tour.allocate_days > 0) {
			tour.allocate_days--;
		}
		Itinerary.getSpot(tour.city.id, tour.allocate_days, $scope.itinerary.selected_tag).then(function(res){
			tour.spots = res.data;
		});;
	}

	$scope.showSpotsStatus = false;




	$scope.showSpotsStatus = true;

	$scope.showSpots = function(spots, unused_spots){
		$scope.selectedSpots = spots;
		$scope.showSpotsStatus = true;
		$scope.unused_spots = unused_spots;
		clearAllSelected();
		spots.selected = true;
	}

	function clearAllSelected() {
		_.each($scope.tours, function(city) {
			_.each(city.spots.plan, function(spot){
				spot.selected = false;
			})
		})
	}

	$scope.deleteSpot = function(spot) {
		var index = $scope.selectedSpots.indexOf(spot);
		$scope.selectedSpots.splice(index, 1);
		$scope.unused_spots.push(spot);
	}

	$scope.addSpot = function(spot) {
		$scope.selectedSpots.push(spot);
		var index = $scope.unused_spots.indexOf(spot);
		$scope.unused_spots.splice(index, 1);		
	}


	$scope.addCity = function(city) {

		var obj = {};
		obj.city = _.map($scope.tours, function(city){
			return city.id;
		})
		obj.city.splice(1, 0, city.id);
		updatePlan(obj);
	}

	function updatePlan(obj){
		obj = _.extend(obj, $scope.itinerary);
		delete obj.status;
		$http.post(Controller.base() + 'api/plan', obj).then(function(res){
			toastr.success('添加城市成功!');
			Itinerary.children = res.data;
			Itinerary.getCityInfo()
				.then(Itinerary.getSpots())
				.then(function(){
					$scope.tours = Itinerary.children.city_plan;
					$scope.sugguest_cities = _.map(Itinerary.children.sugguest_cities, function(id){
						return CitiInfo.getCitybyId(id);
					});
				})
		})
		.catch(function(err){
			console.log(err);
			toastr.error('无法添加此城市，请选择其他城市');
		})
	}


	$scope.deletePlan = function(tour) {
		var index = $scope.tours.indexOf(tour);
		$scope.tours.splice(index, 1);
		var obj = {};
		obj.city = _.map($scope.tours, function(city){
			return city.id;
		})
		updatePlan(obj);
	}

	$scope.chooseGuide = function(){

		if ($scope.getDays() !== $scope.diffDate) {
			toastr.error('安排时间和规划时间不符');
			return
		}

		// if(!User.persistentData.loggedIn) {
		// 	toastr.error('未登录，请先登录');
		// 	$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
		// 	return
		// }

		chooseGuideFunc();
	}


	$rootScope.$on(AUTH_EVENTS.loginSuccess, function(){
		chooseGuideFunc();
	});

	function removeUnusedData(){
		if($scope.itinerary.status) {
			delete $scope.itinerary.status;			
		}
		if ($scope.itinerary.sugguest_cities) {
			delete $scope.itinerary.sugguest_cities;
		}
		if ($scope.itinerary.sugguest_guide) {
			delete $scope.itinerary.sugguest_guide;
		}
		_.each($scope.itinerary.city_plan, function(plan){
			if (plan.spots && plan.spots.unused_spots) {
				delete plan.spots.unused_spots;
			}
			if (plan.sugguest_guide) {
				delete plan.sugguest_guide;
			}
		})
	}

	function chooseGuideFunc() {
		$scope.status = 2;
		// $scope.showMap = false;

		removeUnusedData();

		// console.log(JSON.stringify($scope.itinerary));
		$scope.showSpotsStatus = false;
		$scope.showGuide = true;

		// console.log(JSON.stringify($scope.itinerary));
		$http.post(Controller.base() + 'api/find_guide', $scope.itinerary).then(function(res){
			console.log(res);
			$scope.itinerary = _.clone(res.data);
			Itinerary.children = _.clone(res.data);
			$scope.guideInfo = $scope.itinerary.sugguest_oneguide;
		})
	}


	// Default view to show one
	$scope.chooseGuideTypeStatus = 'one';
	$scope.chooseGuideType = function(type){
		$scope.chooseGuideTypeStatus = type;
		$scope.cancelSelectedGuide();
		// resetQuote();
	}

	$scope.showGuideContentStatus = false;
	$scope.toggleGuideContent = function(plan){
		plan.showGuideContentStatus = !plan.showGuideContentStatus;
	}


	// function parseGuideInfo(data){
	// 	_.each(data, function(item) {
	// 		if (item.guide_plan_type === "ONE_GUIDE_FOR_EACH_CITY") {
	// 			$scope.guideInfo_Multi = _.cloneDeep(item.city);
	// 			$scope.multi_city_plan = _.cloneDeep(item.city);
	// 		} else if(item.guide_plan_type === "ONE_GUIDE_FOR_THE_WHOLE_TRIP") {
	// 			$scope.guideInfo = item.guide_for_whole_trip;
	// 		}
	// 	})
	// }

	$scope.selectGuide = function(guide, index){
		if ($scope.chooseGuideTypeStatus === 'one') {
			$scope.selectedGuide = guide;
			_.each($scope.itinerary.city_plan, function(city){
				city.selectedGuide = guide;
			})
			$scope.itinerary.guide_plan_type = 'one';
		} else if ($scope.chooseGuideTypeStatus === 'multi'){
			$scope.itinerary.filtedCity = $filter('cityFilter')($scope.itinerary.city_plan);
			$scope.itinerary.filtedCity[index].selectedGuide = guide;
			$scope.itinerary.guide_plan_type = 'multi';
		}
		$scope.showOrder = true;
		$scope.showMap = false;
		// resetQuote();
	}

	$scope.cancelSelectedGuide = function(){
		$scope.selectedGuide = {};
		_.each($scope.itinerary.city_plan, function(city){
			city.selectedGuide = {};
		})
		$scope.showOrder = false;
		// resetQuote();
	}

	$scope.cancelGuideFromList = function(index) {
		console.log($scope.itinerary.city_plan);
		$scope.itinerary.filtedCity = $filter('cityFilter')($scope.itinerary.city_plan);
		console.log();
		$scope.itinerary.filtedCity[index].selectedGuide = undefined;
		// resetQuote();
	}

	$scope.quoteToPay = "获取价格";

	$scope.getQuote = function(){
		$scope.quotes = [];
		removeUnusedData();
		// console.log(JSON.stringify($scope.itinerary));

		$http.post(Controller.base() + 'api/quote', $scope.itinerary).then(function(res){
			console.log(res);
		}).catch(function(e){
			console.log(e);
		})

	}

	// function checkPlanStatus(){
	// 	var flag = 0;
	// 	_.each(TourInfo.itinerary.city, function(city){
	// 		if(city.status === 'selected') {
	// 			flag++;
	// 		}
	// 	})
	// 	return flag === TourInfo.itinerary.city.length;
	// }

	// $scope.gotoReview = function(quote){
	// 	TourInfo.itinerary.user_token = $cookieStore.get('token');
	// 	$http.post(Controller.base() + 'api/booking', {"itinerary": TourInfo.itinerary}).then(function(res){
	// 		if(res.data.status === 'SUCCESS') {
	// 			TourInfo.itinerary = res.data.itinerary;
	// 			$state.go('review');
	// 		}
	// 	}).catch(function(err){
	// 		console.log(err);
	// 	});

	// }


	// $scope.openGuideModal = function(guide){
	// 	$scope.guideShown = guide;
	//     var guideModalInstance = $modal.open({
	//       animation: true,
	//       scope: $scope,
	//       templateUrl: 'scripts/directives/modal/guideModal.tpl.html',
	//       controller: 'GuideModalCtrl',
	//     });
	// }

	// $scope.toggleContent = function(plan){
	// 	plan.contentStatus = !plan.contentStatus;
	// }

	// $scope.showMap = true;


	// resetQuote();
	// function resetQuote(){
	// 	$scope.quoteToPay = "获取价格";
	// 	$scope.showQuoteView = false;
	// }


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