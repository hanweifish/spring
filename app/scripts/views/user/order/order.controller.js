;(function() {
'use strict';

/* Controllers */

angular.module('views.users')
.controller('OrderCtrl', [
    '$scope',
    '$http',
    'User',
    OrderCtrl
]);


function OrderCtrl($scope, $http, User) {
	// $scope.order = User.order;
	// console.log(JSON.stringify($scope.order));

	$scope.orders = _.filter(User.order, function(order){
		return order.order_status === 'PAID';
	})


// 	$scope.orders = [
// 	{
// 	"order_id": 1,
// 	"cost_usd": 5558,
// 	"order_status": "WAIT_FOR_PAYMENT",
// 	"is_cancelled": false,
// 	"reservation": [{
// 		"reservation_id": 28,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160116,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}, {
// 		"reservation_id": 29,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160117,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}, {
// 		"reservation_id": 30,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160118,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}, {
// 		"reservation_id": 31,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160119,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}, {
// 		"reservation_id": 32,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160120,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}, {
// 		"reservation_id": 33,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160121,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}, {
// 		"reservation_id": 34,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160122,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}, {
// 		"reservation_id": 35,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160123,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}],
// 	"itinerary": {
// 		"user_token": "n701bi47a5i0ulo6ketk0f9nsc2t6ib0je8cjdlt",
// 		"startdate": 20160116,
// 		"enddate": 20160122,
// 		"start_city": {
// 			"city_id": 1,
// 			"name": "San Diego",
// 			"cn_name": "圣地亚哥"
// 		},
// 		"end_city": {
// 			"city_id": 2,
// 			"name": "Los Angels",
// 			"cn_name": "洛杉矶"
// 		},
// 		"city": [{
// 			"city": {
// 				"city_id": 1,
// 				"name": "San Diego",
// 				"cn_name": "圣地亚哥",
// 				"suggest": 2,
// 				"min": 1,
// 				"alias": ["San Diego", "圣地亚哥", "SD", "SDYG", "SHIDIYAGE", "SAN"]
// 			},
// 			"num_days": 2,
// 			"suggest_rate": 1,
// 			"start_date": 20160116,
// 			"guide": [{
// 				"guide_id": 200,
// 				"name": "董琪",
// 				"description": "旧金山",
// 				"max_people": 7,
// 				"has_car": true,
// 				"score": 9,
// 				"topic": ["浪漫", "商务", "家庭"],
// 				"phone": 4155280389,
// 				"host_city": {
// 					"city_id": 8,
// 					"name": "San Francisco",
// 					"cn_name": "旧金山",
// 					"suggest": 3,
// 					"min": 1,
// 					"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 				},
// 				"cover_city": [{
// 					"city_id": 1,
// 					"name": "San Diego",
// 					"cn_name": "圣地亚哥",
// 					"suggest": 2,
// 					"min": 1,
// 					"alias": ["San Diego", "圣地亚哥", "SD", "SDYG", "SHIDIYAGE", "SAN"]
// 				}, {
// 					"city_id": 2,
// 					"name": "Los Angels",
// 					"cn_name": "洛杉矶",
// 					"suggest": 3,
// 					"min": 2,
// 					"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 				}, {
// 					"city_id": 8,
// 					"name": "San Francisco",
// 					"cn_name": "旧金山",
// 					"suggest": 3,
// 					"min": 1,
// 					"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 				}]
// 			}]
// 		}, {
// 			"city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 			},
// 			"num_days": 3,
// 			"suggest_rate": 1,
// 			"start_date": 20160118,
// 			"guide": [{
// 				"guide_id": 200,
// 				"name": "董琪",
// 				"description": "旧金山",
// 				"max_people": 7,
// 				"has_car": true,
// 				"score": 9,
// 				"topic": ["浪漫", "商务", "家庭"],
// 				"phone": 4155280389,
// 				"host_city": {
// 					"city_id": 8,
// 					"name": "San Francisco",
// 					"cn_name": "旧金山",
// 					"suggest": 3,
// 					"min": 1,
// 					"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 				},
// 				"cover_city": [{
// 					"city_id": 1,
// 					"name": "San Diego",
// 					"cn_name": "圣地亚哥",
// 					"suggest": 2,
// 					"min": 1,
// 					"alias": ["San Diego", "圣地亚哥", "SD", "SDYG", "SHIDIYAGE", "SAN"]
// 				}, {
// 					"city_id": 2,
// 					"name": "Los Angels",
// 					"cn_name": "洛杉矶",
// 					"suggest": 3,
// 					"min": 2,
// 					"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 				}, {
// 					"city_id": 8,
// 					"name": "San Francisco",
// 					"cn_name": "旧金山",
// 					"suggest": 3,
// 					"min": 1,
// 					"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 				}]
// 			}]
// 		}, {
// 			"city": {
// 				"city_id": 2,
// 				"name": "Los Angels",
// 				"cn_name": "洛杉矶",
// 				"suggest": 3,
// 				"min": 2,
// 				"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 			},
// 			"num_days": 3,
// 			"suggest_rate": 1,
// 			"start_date": 20160121,
// 			"guide": [{
// 				"guide_id": 200,
// 				"name": "董琪",
// 				"description": "旧金山",
// 				"max_people": 7,
// 				"has_car": true,
// 				"score": 9,
// 				"topic": ["浪漫", "商务", "家庭"],
// 				"phone": 4155280389,
// 				"host_city": {
// 					"city_id": 8,
// 					"name": "San Francisco",
// 					"cn_name": "旧金山",
// 					"suggest": 3,
// 					"min": 1,
// 					"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 				},
// 				"cover_city": [{
// 					"city_id": 1,
// 					"name": "San Diego",
// 					"cn_name": "圣地亚哥",
// 					"suggest": 2,
// 					"min": 1,
// 					"alias": ["San Diego", "圣地亚哥", "SD", "SDYG", "SHIDIYAGE", "SAN"]
// 				}, {
// 					"city_id": 2,
// 					"name": "Los Angels",
// 					"cn_name": "洛杉矶",
// 					"suggest": 3,
// 					"min": 2,
// 					"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 				}, {
// 					"city_id": 8,
// 					"name": "San Francisco",
// 					"cn_name": "旧金山",
// 					"suggest": 3,
// 					"min": 1,
// 					"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 				}]
// 			}]
// 		}],
// 		"edge": [{
// 			"from_city": {
// 				"city_id": 1,
// 				"name": "San Diego",
// 				"cn_name": "圣地亚哥"
// 			},
// 			"to_city": {
// 				"city_id": 1,
// 				"name": "San Diego",
// 				"cn_name": "圣地亚哥"
// 			},
// 			"distance": 0,
// 			"hours": 0
// 		}, {
// 			"from_city": {
// 				"city_id": 1,
// 				"name": "San Diego",
// 				"cn_name": "圣地亚哥"
// 			},
// 			"to_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山"
// 			},
// 			"distance": 503,
// 			"hours": 9
// 		}, {
// 			"from_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山"
// 			},
// 			"to_city": {
// 				"city_id": 2,
// 				"name": "Los Angels",
// 				"cn_name": "洛杉矶"
// 			},
// 			"distance": 383,
// 			"hours": 7
// 		}, {
// 			"from_city": {
// 				"city_id": 2,
// 				"name": "Los Angels",
// 				"cn_name": "洛杉矶"
// 			},
// 			"to_city": {
// 				"city_id": 2,
// 				"name": "Los Angels",
// 				"cn_name": "洛杉矶"
// 			},
// 			"distance": 0,
// 			"hours": 0
// 		}],
// 		"keep_order_of_via_cities": false,
// 		"suggest_city": [{
// 			"city": {
// 				"city_id": 3,
// 				"name": "Las Vegas",
// 				"cn_name": "拉斯维加斯"
// 			},
// 			"num_days": 3,
// 			"suggest_rate": 0.39277655
// 		}, {
// 			"city": {
// 				"city_id": 6,
// 				"name": "Reno",
// 				"cn_name": "雷诺"
// 			},
// 			"num_days": 2,
// 			"suggest_rate": 0.59029347
// 		}, {
// 			"city": {
// 				"city_id": 7,
// 				"name": "Sacramento",
// 				"cn_name": "萨克拉门托"
// 			},
// 			"num_days": 1,
// 			"suggest_rate": 0.89503384
// 		}],
// 		"num_people": 3,
// 		"num_room": 3,
// 		"hotel": 3,
// 		"guide_plan_type": "ONE_GUIDE_FOR_THE_WHOLE_TRIP",
// 		"plan_status": "SUCCESS",
// 		"guide_for_whole_trip": [{
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		}],
// 		"quote": {
// 			"cost_usd": 5558,
// 			"route_cost": 2658,
// 			"hotel_cost": 2400,
// 			"hotel_cost_for_guide": 500
// 		}
// 	}
// }, {
// 	"order_id": 2,
// 	"cost_usd": 5558,
// 	"order_status": "WAIT_FOR_PAYMENT",
// 	"is_cancelled": false,
// 	"reservation": [{
// 		"reservation_id": 28,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160116,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}, {
// 		"reservation_id": 29,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160117,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}, {
// 		"reservation_id": 30,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160118,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}, {
// 		"reservation_id": 31,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160119,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}, {
// 		"reservation_id": 32,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160120,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}, {
// 		"reservation_id": 33,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160121,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}, {
// 		"reservation_id": 34,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160122,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}, {
// 		"reservation_id": 35,
// 		"guide": {
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		},
// 		"reserved_date": 20160123,
// 		"is_cancel": false,
// 		"is_permanent": false,
// 		"expired_ts": 1453355902000
// 	}],
// 	"itinerary": {
// 		"user_token": "n701bi47a5i0ulo6ketk0f9nsc2t6ib0je8cjdlt",
// 		"startdate": 20160116,
// 		"enddate": 20160122,
// 		"start_city": {
// 			"city_id": 1,
// 			"name": "San Diego",
// 			"cn_name": "圣地亚哥"
// 		},
// 		"end_city": {
// 			"city_id": 2,
// 			"name": "Los Angels",
// 			"cn_name": "洛杉矶"
// 		},
// 		"city": [{
// 			"city": {
// 				"city_id": 1,
// 				"name": "San Diego",
// 				"cn_name": "圣地亚哥",
// 				"suggest": 2,
// 				"min": 1,
// 				"alias": ["San Diego", "圣地亚哥", "SD", "SDYG", "SHIDIYAGE", "SAN"]
// 			},
// 			"num_days": 2,
// 			"suggest_rate": 1,
// 			"start_date": 20160116,
// 			"guide": [{
// 				"guide_id": 200,
// 				"name": "董琪",
// 				"description": "旧金山",
// 				"max_people": 7,
// 				"has_car": true,
// 				"score": 9,
// 				"topic": ["浪漫", "商务", "家庭"],
// 				"phone": 4155280389,
// 				"host_city": {
// 					"city_id": 8,
// 					"name": "San Francisco",
// 					"cn_name": "旧金山",
// 					"suggest": 3,
// 					"min": 1,
// 					"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 				},
// 				"cover_city": [{
// 					"city_id": 1,
// 					"name": "San Diego",
// 					"cn_name": "圣地亚哥",
// 					"suggest": 2,
// 					"min": 1,
// 					"alias": ["San Diego", "圣地亚哥", "SD", "SDYG", "SHIDIYAGE", "SAN"]
// 				}, {
// 					"city_id": 2,
// 					"name": "Los Angels",
// 					"cn_name": "洛杉矶",
// 					"suggest": 3,
// 					"min": 2,
// 					"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 				}, {
// 					"city_id": 8,
// 					"name": "San Francisco",
// 					"cn_name": "旧金山",
// 					"suggest": 3,
// 					"min": 1,
// 					"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 				}]
// 			}]
// 		}, {
// 			"city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 			},
// 			"num_days": 3,
// 			"suggest_rate": 1,
// 			"start_date": 20160118,
// 			"guide": [{
// 				"guide_id": 200,
// 				"name": "董琪",
// 				"description": "旧金山",
// 				"max_people": 7,
// 				"has_car": true,
// 				"score": 9,
// 				"topic": ["浪漫", "商务", "家庭"],
// 				"phone": 4155280389,
// 				"host_city": {
// 					"city_id": 8,
// 					"name": "San Francisco",
// 					"cn_name": "旧金山",
// 					"suggest": 3,
// 					"min": 1,
// 					"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 				},
// 				"cover_city": [{
// 					"city_id": 1,
// 					"name": "San Diego",
// 					"cn_name": "圣地亚哥",
// 					"suggest": 2,
// 					"min": 1,
// 					"alias": ["San Diego", "圣地亚哥", "SD", "SDYG", "SHIDIYAGE", "SAN"]
// 				}, {
// 					"city_id": 2,
// 					"name": "Los Angels",
// 					"cn_name": "洛杉矶",
// 					"suggest": 3,
// 					"min": 2,
// 					"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 				}, {
// 					"city_id": 8,
// 					"name": "San Francisco",
// 					"cn_name": "旧金山",
// 					"suggest": 3,
// 					"min": 1,
// 					"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 				}]
// 			}]
// 		}, {
// 			"city": {
// 				"city_id": 2,
// 				"name": "Los Angels",
// 				"cn_name": "洛杉矶",
// 				"suggest": 3,
// 				"min": 2,
// 				"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 			},
// 			"num_days": 3,
// 			"suggest_rate": 1,
// 			"start_date": 20160121,
// 			"guide": [{
// 				"guide_id": 200,
// 				"name": "董琪",
// 				"description": "旧金山",
// 				"max_people": 7,
// 				"has_car": true,
// 				"score": 9,
// 				"topic": ["浪漫", "商务", "家庭"],
// 				"phone": 4155280389,
// 				"host_city": {
// 					"city_id": 8,
// 					"name": "San Francisco",
// 					"cn_name": "旧金山",
// 					"suggest": 3,
// 					"min": 1,
// 					"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 				},
// 				"cover_city": [{
// 					"city_id": 1,
// 					"name": "San Diego",
// 					"cn_name": "圣地亚哥",
// 					"suggest": 2,
// 					"min": 1,
// 					"alias": ["San Diego", "圣地亚哥", "SD", "SDYG", "SHIDIYAGE", "SAN"]
// 				}, {
// 					"city_id": 2,
// 					"name": "Los Angels",
// 					"cn_name": "洛杉矶",
// 					"suggest": 3,
// 					"min": 2,
// 					"alias": ["Los Angels", "洛杉矶", "LA", "LUOSANJI", "LDJ", "LAX"]
// 				}, {
// 					"city_id": 8,
// 					"name": "San Francisco",
// 					"cn_name": "旧金山",
// 					"suggest": 3,
// 					"min": 1,
// 					"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
// 				}]
// 			}]
// 		}],
// 		"edge": [{
// 			"from_city": {
// 				"city_id": 1,
// 				"name": "San Diego",
// 				"cn_name": "圣地亚哥"
// 			},
// 			"to_city": {
// 				"city_id": 1,
// 				"name": "San Diego",
// 				"cn_name": "圣地亚哥"
// 			},
// 			"distance": 0,
// 			"hours": 0
// 		}, {
// 			"from_city": {
// 				"city_id": 1,
// 				"name": "San Diego",
// 				"cn_name": "圣地亚哥"
// 			},
// 			"to_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山"
// 			},
// 			"distance": 503,
// 			"hours": 9
// 		}, {
// 			"from_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山"
// 			},
// 			"to_city": {
// 				"city_id": 2,
// 				"name": "Los Angels",
// 				"cn_name": "洛杉矶"
// 			},
// 			"distance": 383,
// 			"hours": 7
// 		}, {
// 			"from_city": {
// 				"city_id": 2,
// 				"name": "Los Angels",
// 				"cn_name": "洛杉矶"
// 			},
// 			"to_city": {
// 				"city_id": 2,
// 				"name": "Los Angels",
// 				"cn_name": "洛杉矶"
// 			},
// 			"distance": 0,
// 			"hours": 0
// 		}],
// 		"keep_order_of_via_cities": false,
// 		"suggest_city": [{
// 			"city": {
// 				"city_id": 3,
// 				"name": "Las Vegas",
// 				"cn_name": "拉斯维加斯"
// 			},
// 			"num_days": 3,
// 			"suggest_rate": 0.39277655
// 		}, {
// 			"city": {
// 				"city_id": 6,
// 				"name": "Reno",
// 				"cn_name": "雷诺"
// 			},
// 			"num_days": 2,
// 			"suggest_rate": 0.59029347
// 		}, {
// 			"city": {
// 				"city_id": 7,
// 				"name": "Sacramento",
// 				"cn_name": "萨克拉门托"
// 			},
// 			"num_days": 1,
// 			"suggest_rate": 0.89503384
// 		}],
// 		"num_people": 3,
// 		"num_room": 3,
// 		"hotel": 3,
// 		"guide_plan_type": "ONE_GUIDE_FOR_THE_WHOLE_TRIP",
// 		"plan_status": "SUCCESS",
// 		"guide_for_whole_trip": [{
// 			"guide_id": 200,
// 			"name": "董琪",
// 			"description": "旧金山",
// 			"max_people": 7,
// 			"has_car": true,
// 			"score": 9,
// 			"topic": ["浪漫", "商务", "家庭"],
// 			"phone": 4155280389,
// 			"host_city": {
// 				"city_id": 8,
// 				"name": "San Francisco",
// 				"cn_name": "旧金山",
// 				"suggest": 3,
// 				"min": 1,
// 				"alias": ["San Francisco", "旧金山", "SF", "JJS", "JIUJINGSHAN", "SFO"]
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
// 		}],
// 		"quote": {
// 			"cost_usd": 5558,
// 			"route_cost": 2658,
// 			"hotel_cost": 2400,
// 			"hotel_cost_for_guide": 500
// 		}
// 	}
// }];




}

}());