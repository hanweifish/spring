;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('ReviewCtrl', [
    '$scope',
    '$http',
    '$state',
    '$location',
    '$timeout',
    'TourInfo',
    'Controller',
    ReviewCtrl
]);


function ReviewCtrl($scope, $http, $state, $location, $timeout, TourInfo, Controller) {

// $scope.itinerary = {
// 	"user_token": "b4bqh53icaj85m7vvr47gu3o9arl71oh6nuk7r63",
// 	"startdate": 20160116,
// 	"enddate": 20160122,
// 	"start_city": {
// 		"city_id": 1,
// 		"name": "San Diego",
// 		"cn_name": "圣地亚哥"
// 	},
// 	"end_city": {
// 		"city_id": 2,
// 		"name": "Los Angels",
// 		"cn_name": "洛杉矶"
// 	},
// 	"city": [{
// 		"city": {
// 			"city_id": 1,
// 			"name": "San Diego",
// 			"cn_name": "圣地亚哥",
// 			"suggest": 2,
// 			"min": 1,
// 			"alias": ["San Diego", "圣地亚哥", "SD", "SDYG", "SHIDIYAGE", "SAN"]
// 		},
// 		"num_days": 2,
// 		"suggest_rate": 1,
// 		"start_date": 20160116,
// 		"guide": [{
// 			"guide_id": 214,
// 			"name": "李龙祥Max",
// 			"description": "洛杉矶",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["商务", "家庭", "浪漫"],
// 			"phone": 6268185575,
// 			"host_city": {
// 				"city_id": 2,
// 				"name": "Los Angels",
// 				"cn_name": "洛杉矶",
// 				"suggest": 3,
// 				"min": 2,
// 				"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 			},
// 			"cover_city": [{
// 				"city_id": 1,
// 				"name": "San Diego",
// 				"cn_name": "圣地亚哥",
// 				"suggest": 2,
// 				"min": 1,
// 				"alias": ["San Diego", "圣地亚哥", "SD", "SDYG", "SHIDIYAGE", "SAN"]
// 			}, {
// 				"city_id": 2,
// 				"name": "Los Angels",
// 				"cn_name": "洛杉矶",
// 				"suggest": 3,
// 				"min": 2,
// 				"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 			}, {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 			}]
// 		}]
// 	}, {
// 		"city": {
// 			"city_id": 8,
// 			"name": "San Francisco",
// 			"cn_name": "旧金山",
// 			"suggest": 3,
// 			"min": 1,
// 			"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 		},
// 		"num_days": 3,
// 		"suggest_rate": 1,
// 		"start_date": 20160118,
// 		"guide": [{
// 			"guide_id": 214,
// 			"name": "李龙祥Max",
// 			"description": "洛杉矶",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["商务", "家庭", "浪漫"],
// 			"phone": 6268185575,
// 			"host_city": {
// 				"city_id": 2,
// 				"name": "Los Angels",
// 				"cn_name": "洛杉矶",
// 				"suggest": 3,
// 				"min": 2,
// 				"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 			},
// 			"cover_city": [{
// 				"city_id": 1,
// 				"name": "San Diego",
// 				"cn_name": "圣地亚哥",
// 				"suggest": 2,
// 				"min": 1,
// 				"alias": ["San Diego", "圣地亚哥", "SD", "SDYG", "SHIDIYAGE", "SAN"]
// 			}, {
// 				"city_id": 2,
// 				"name": "Los Angels",
// 				"cn_name": "洛杉矶",
// 				"suggest": 3,
// 				"min": 2,
// 				"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 			}, {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 			}]
// 		}]
// 	}, {
// 		"city": {
// 			"city_id": 2,
// 			"name": "Los Angels",
// 			"cn_name": "洛杉矶",
// 			"suggest": 3,
// 			"min": 2,
// 			"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 		},
// 		"num_days": 3,
// 		"suggest_rate": 1,
// 		"start_date": 20160121,
// 		"guide": [{
// 			"guide_id": 214,
// 			"name": "李龙祥Max",
// 			"description": "洛杉矶",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["商务", "家庭", "浪漫"],
// 			"phone": 6268185575,
// 			"host_city": {
// 				"city_id": 2,
// 				"name": "Los Angels",
// 				"cn_name": "洛杉矶",
// 				"suggest": 3,
// 				"min": 2,
// 				"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 			},
// 			"cover_city": [{
// 				"city_id": 1,
// 				"name": "San Diego",
// 				"cn_name": "圣地亚哥",
// 				"suggest": 2,
// 				"min": 1,
// 				"alias": ["San Diego", "圣地亚哥", "SD", "SDYG", "SHIDIYAGE", "SAN"]
// 			}, {
// 				"city_id": 2,
// 				"name": "Los Angels",
// 				"cn_name": "洛杉矶",
// 				"suggest": 3,
// 				"min": 2,
// 				"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 			}, {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 			}]
// 		}]
// 	}],
// 	"edge": [{
// 		"from_city": {
// 			"city_id": 1,
// 			"name": "San Diego",
// 			"cn_name": "圣地亚哥"
// 		},
// 		"to_city": {
// 			"city_id": 1,
// 			"name": "San Diego",
// 			"cn_name": "圣地亚哥"
// 		},
// 		"distance": 0,
// 		"hours": 0
// 	}, {
// 		"from_city": {
// 			"city_id": 1,
// 			"name": "San Diego",
// 			"cn_name": "圣地亚哥"
// 		},
// 		"to_city": {
// 			"city_id": 8,
// 			"name": "San Francisco",
// 			"cn_name": "旧金山"
// 		},
// 		"distance": 503,
// 		"hours": 9
// 	}, {
// 		"from_city": {
// 			"city_id": 8,
// 			"name": "San Francisco",
// 			"cn_name": "旧金山"
// 		},
// 		"to_city": {
// 			"city_id": 2,
// 			"name": "Los Angels",
// 			"cn_name": "洛杉矶"
// 		},
// 		"distance": 383,
// 		"hours": 7
// 	}, {
// 		"from_city": {
// 			"city_id": 2,
// 			"name": "Los Angels",
// 			"cn_name": "洛杉矶"
// 		},
// 		"to_city": {
// 			"city_id": 2,
// 			"name": "Los Angels",
// 			"cn_name": "洛杉矶"
// 		},
// 		"distance": 0,
// 		"hours": 0
// 	}],
// 	"keep_order_of_via_cities": false,
// 	"suggest_city": [{
// 		"city": {
// 			"city_id": 3,
// 			"name": "Las Vegas",
// 			"cn_name": "拉斯维加斯"
// 		},
// 		"num_days": 3,
// 		"suggest_rate": 0.39277655
// 	}, {
// 		"city": {
// 			"city_id": 6,
// 			"name": "Reno",
// 			"cn_name": "雷诺"
// 		},
// 		"num_days": 2,
// 		"suggest_rate": 0.59029347
// 	}, {
// 		"city": {
// 			"city_id": 7,
// 			"name": "Sacramento",
// 			"cn_name": "萨克拉门托"
// 		},
// 		"num_days": 1,
// 		"suggest_rate": 0.89503384
// 	}],
// 	"num_people": 3,
// 	"num_room": 3,
// 	"hotel": 3,
// 	"guide_plan_type": "ONE_GUIDE_FOR_EACH_CITY",
// 	"plan_status": "SUCCESS",
// 	"quote": {
// 		"cost_usd": 4209,
// 		"route_cost": 1509,
// 		"hotel_cost": 2200,
// 		"hotel_cost_for_guide": 500
// 	},
// 	"itinerary_id": 34,
// 	"reservation_id": [321, 322, 323, 324, 325, 326, 327, 328],
// 	"order": {
// 		"order_id": 50,
// 		"cost_usd": 4209
// 	}
// }


	$scope.$parent.showfooter = true;
	$scope.itinerary = TourInfo.itinerary;

	_.each($scope.itinerary.city, function(city){
		var id = city.city.city_id;
		var num_days = city.num_days;
		updatePlan(city, id, num_days);
	})

	$scope.status = 1;
	$scope.gotostep = function(index) {
		$scope.status = index;
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


	$scope.doCheckout = function(token) {
		TourInfo.itinerary.order.token = token.id;

		$http.post(Controller.base() + 'api/order', {"itinerary": TourInfo.itinerary}).then(function(res){
			if(res.data.status === 'SUCCESS') {
				TourInfo.itinerary = res.data.itinerary;
				$scope.order_id = TourInfo.itinerary.order.order_id;
				$scope.gotostep(3);
			}

		}).catch(function(err){
			console.log(err);
		});
    };

    $scope.checkout = function(){
    	var url = 'https://api.ehking.com/onlinePay/order';
		$http.post(url, {"itinerary": TourInfo.itinerary}).then(function(res){
			if(res.data.status === 'SUCCESS') {
				TourInfo.itinerary = res.data.itinerary;
				$state.go('confirm');
			}

		}).catch(function(err){
			console.log(err);
		});
    }

}

}());