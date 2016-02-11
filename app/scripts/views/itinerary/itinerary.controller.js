;(function() {
'use strict';

/* Controllers */

angular.module('app.controllers')
.controller('ItineraryCtrl', [
    '$scope',
    '$http',
    '$modal',
    'Controller',
    ItineraryCtrl
]);


function ItineraryCtrl($scope, $http, $modal, Controller) {
	$scope.$parent.showfooter = true;
	$scope.itinerary = {
		"city_plan": [{
			"id": "56b45d951a0b847ff8eedc7d",
			"allocate_days": 5,
			"start_date": 1455091200000,
			"end_date": 1455350400000,
			"city": {
				"name": "洛杉矶",
				"id": "56b45d951a0b847ff8eedc7d",
				"min": 2,
				"max": 3,
				"alias": "LA/LUOSANJI/LDJ/LAX",
				"region": 1
			},
			"spots": {
				"plan": [
					[{
						"_id": "56b45d9a2ca80584f89d11a9",
						"name": "盖蒂中心",
						"city_id": "56b45d951a0b847ff8eedc7d",
						"hour": "3",
						"score": 10,
						"tag": "家庭|浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11ae",
						"name": "Nethercutt Museum",
						"city_id": "56b45d951a0b847ff8eedc7d",
						"hour": "3",
						"score": 10,
						"tag": "家庭|浪漫",
						"__v": 0
					}],
					[{
						"_id": "56b45d9a2ca80584f89d11ac",
						"name": "加利福尼亚科技中心",
						"city_id": "56b45d951a0b847ff8eedc7d",
						"hour": "5",
						"score": 9,
						"tag": "家庭|浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11b9",
						"name": "好莱坞标志",
						"city_id": "56b45d951a0b847ff8eedc7d",
						"hour": "0.5",
						"score": 8,
						"tag": "家庭|浪漫|商务",
						"__v": 0
					}],
					[{
						"_id": "56b45d9a2ca80584f89d11ab",
						"name": "好莱坞环球影城",
						"city_id": "56b45d951a0b847ff8eedc7d",
						"hour": "4",
						"score": 9,
						"tag": "家庭|浪漫|商务",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11aa",
						"name": "格里菲斯天文台",
						"city_id": "56b45d951a0b847ff8eedc7d",
						"hour": "2",
						"score": 9,
						"tag": "家庭|浪漫",
						"__v": 0
					}],
					[{
						"_id": "56b45d9a2ca80584f89d11b7",
						"name": "格莱美博物馆",
						"city_id": "56b45d951a0b847ff8eedc7d",
						"hour": "3",
						"score": 9,
						"tag": "家庭|浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11b2",
						"name": "鲁尼恩峡谷公园",
						"city_id": "56b45d951a0b847ff8eedc7d",
						"hour": "3",
						"score": 9,
						"tag": "家庭|浪漫",
						"__v": 0
					}],
					[{
						"_id": "56b45d9a2ca80584f89d11b6",
						"name": "好莱坞露天剧场",
						"city_id": "56b45d951a0b847ff8eedc7d",
						"hour": "3",
						"score": 9,
						"tag": "家庭|浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11b0",
						"name": "圣莫尼卡湾",
						"city_id": "56b45d951a0b847ff8eedc7d",
						"hour": "3",
						"score": 9,
						"tag": "家庭|商务|浪漫",
						"__v": 0
					}]
				]
			},
			"$$hashKey": "object:503",
			"selectedGuide": {
				"_id": "56b45d9b2ca80584f89d1287",
				"name": "董琪",
				"description": "旧金山",
				"tag": "浪漫 商务 家庭",
				"score": 9,
				"max_person": 7,
				"has_car": true,
				"phone": "4155280389",
				"image_url": null,
				"language": "英语|汉语",
				"payment": null,
				"__v": 0,
				"cover_city": ["56b45d951a0b847ff8eedc7d", "56b45d951a0b847ff8eedc83", "56b45d951a0b847ff8eedc7c"],
				"$$hashKey": "object:483"
			}
		}, {
			"id": "56b45d951a0b847ff8eedc9a",
			"allocate_days": 1,
			"start_date": 1455350400000,
			"end_date": 1455436800000,
			"city": {
				"name": "转机",
				"id": "56b45d951a0b847ff8eedc9a",
				"min": 1,
				"max": 1,
				"alias": "ZJ",
				"region": 0
			},
			"spots": {
				"plan": [
					[]
				]
			},
			"selectedGuide": {
				"_id": "56b45d9b2ca80584f89d1287",
				"name": "董琪",
				"description": "旧金山",
				"tag": "浪漫 商务 家庭",
				"score": 9,
				"max_person": 7,
				"has_car": true,
				"phone": "4155280389",
				"image_url": null,
				"language": "英语|汉语",
				"payment": null,
				"__v": 0,
				"cover_city": ["56b45d951a0b847ff8eedc7d", "56b45d951a0b847ff8eedc83", "56b45d951a0b847ff8eedc7c"],
				"$$hashKey": "object:483"
			}
		}, {
			"id": "56b45d951a0b847ff8eedc89",
			"allocate_days": 2,
			"start_date": 1455436800000,
			"end_date": 1455609600000,
			"city": {
				"name": "华盛顿",
				"id": "56b45d951a0b847ff8eedc89",
				"min": 1,
				"max": 2,
				"alias": "HSD/HuaShengDun/DC",
				"region": 2
			},
			"spots": {
				"plan": [
					[{
						"_id": "56b45d9a2ca80584f89d11d8",
						"name": "美国国会山",
						"city_id": "56b45d951a0b847ff8eedc89",
						"hour": "1",
						"score": 10,
						"tag": "家庭｜商务｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11d9",
						"name": "白宫",
						"city_id": "56b45d951a0b847ff8eedc89",
						"hour": "1",
						"score": 10,
						"tag": "家庭｜商务｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11d5",
						"name": "林肯纪念堂",
						"city_id": "56b45d951a0b847ff8eedc89",
						"hour": "1",
						"score": 9,
						"tag": "家庭｜商务｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11d6",
						"name": "杰佛逊纪念堂",
						"city_id": "56b45d951a0b847ff8eedc89",
						"hour": "1",
						"score": 9,
						"tag": "家庭｜商务｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11d7",
						"name": "华盛顿纪念碑",
						"city_id": "56b45d951a0b847ff8eedc89",
						"hour": "1",
						"score": 9,
						"tag": "家庭｜商务｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11db",
						"name": "国家艺廊",
						"city_id": "56b45d951a0b847ff8eedc89",
						"hour": "1",
						"score": 8,
						"tag": "家庭｜商务｜浪漫",
						"__v": 0
					}],
					[{
						"_id": "56b45d9a2ca80584f89d11da",
						"name": "国家航天博物馆",
						"city_id": "56b45d951a0b847ff8eedc89",
						"hour": "2",
						"score": 8,
						"tag": "家庭｜商务｜浪漫",
						"__v": 0
					}]
				]
			},
			"$$hashKey": "object:504",
			"selectedGuide": {
				"_id": "56b45d9b2ca80584f89d1287",
				"name": "董琪",
				"description": "旧金山",
				"tag": "浪漫 商务 家庭",
				"score": 9,
				"max_person": 7,
				"has_car": true,
				"phone": "4155280389",
				"image_url": null,
				"language": "英语|汉语",
				"payment": null,
				"__v": 0,
				"cover_city": ["56b45d951a0b847ff8eedc7d", "56b45d951a0b847ff8eedc83", "56b45d951a0b847ff8eedc7c"],
				"$$hashKey": "object:483"
			}
		}, {
			"id": "56b45d951a0b847ff8eedc8b",
			"allocate_days": 2,
			"start_date": 1455609600000,
			"end_date": 1455782400000,
			"city": {
				"name": "波士顿",
				"id": "56b45d951a0b847ff8eedc8b",
				"min": 1,
				"max": 2,
				"alias": "BSD/BoShiDun",
				"region": 2
			},
			"spots": {
				"plan": [
					[{
						"_id": "56b45d9a2ca80584f89d11e6",
						"name": "哈佛大学",
						"city_id": "56b45d951a0b847ff8eedc8b",
						"hour": "2",
						"score": 9,
						"tag": "家庭｜商务｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11e8",
						"name": "昆西市场",
						"city_id": "56b45d951a0b847ff8eedc8b",
						"hour": "2",
						"score": 9,
						"tag": "家庭｜商务｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11e2",
						"name": "美术博物馆",
						"city_id": "56b45d951a0b847ff8eedc8b",
						"hour": "1",
						"score": 9,
						"tag": "家庭｜商务｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11e3",
						"name": "自由之路",
						"city_id": "56b45d951a0b847ff8eedc8b",
						"hour": "1",
						"score": 9,
						"tag": "家庭｜商务｜浪漫",
						"__v": 0
					}],
					[{
						"_id": "56b45d9a2ca80584f89d11e4",
						"name": "宪法号博物馆",
						"city_id": "56b45d951a0b847ff8eedc8b",
						"hour": "1",
						"score": 9,
						"tag": "家庭｜商务｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11e5",
						"name": "马萨诸塞州议会大厦",
						"city_id": "56b45d951a0b847ff8eedc8b",
						"hour": "1",
						"score": 9,
						"tag": "家庭｜商务｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11e7",
						"name": "麻省理工",
						"city_id": "56b45d951a0b847ff8eedc8b",
						"hour": "1",
						"score": 9,
						"tag": "家庭｜商务｜浪漫",
						"__v": 0
					}]
				]
			},
			"$$hashKey": "object:505",
			"selectedGuide": {
				"_id": "56b45d9b2ca80584f89d1287",
				"name": "董琪",
				"description": "旧金山",
				"tag": "浪漫 商务 家庭",
				"score": 9,
				"max_person": 7,
				"has_car": true,
				"phone": "4155280389",
				"image_url": null,
				"language": "英语|汉语",
				"payment": null,
				"__v": 0,
				"cover_city": ["56b45d951a0b847ff8eedc7d", "56b45d951a0b847ff8eedc83", "56b45d951a0b847ff8eedc7c"],
				"$$hashKey": "object:483"
			}
		}, {
			"id": "56b45d951a0b847ff8eedc88",
			"allocate_days": 4,
			"start_date": 1455782400000,
			"end_date": 1456128000000,
			"city": {
				"name": "纽约",
				"id": "56b45d951a0b847ff8eedc88",
				"min": 2,
				"max": 4,
				"alias": "NY/NiuYue",
				"region": 2
			},
			"spots": {
				"plan": [
					[{
						"_id": "56b45d9a2ca80584f89d11c9",
						"name": "大都会艺术博物馆",
						"city_id": "56b45d951a0b847ff8eedc88",
						"hour": "3",
						"score": 10,
						"tag": "家庭｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11c8",
						"name": "中央公园",
						"city_id": "56b45d951a0b847ff8eedc88",
						"hour": "2",
						"score": 10,
						"tag": "家庭｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11cf",
						"name": "帝国大厦",
						"city_id": "56b45d951a0b847ff8eedc88",
						"hour": "1",
						"score": 9,
						"tag": "家庭｜浪漫",
						"__v": 0
					}],
					[{
						"_id": "56b45d9a2ca80584f89d11d3",
						"name": "第五大道",
						"city_id": "56b45d951a0b847ff8eedc88",
						"hour": "2",
						"score": 9,
						"tag": "家庭｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11d2",
						"name": "时代广场",
						"city_id": "56b45d951a0b847ff8eedc88",
						"hour": "2",
						"score": 9,
						"tag": "家庭｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11d4",
						"name": "联合国总部",
						"city_id": "56b45d951a0b847ff8eedc88",
						"hour": "2",
						"score": 9,
						"tag": "家庭｜商务",
						"__v": 0
					}],
					[{
						"_id": "56b45d9a2ca80584f89d11d0",
						"name": "自由女神像",
						"city_id": "56b45d951a0b847ff8eedc88",
						"hour": "1",
						"score": 9,
						"tag": "家庭｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11d1",
						"name": "新世贸大楼",
						"city_id": "56b45d951a0b847ff8eedc88",
						"hour": "1",
						"score": 9,
						"tag": "家庭｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11cd",
						"name": "百老汇",
						"city_id": "56b45d951a0b847ff8eedc88",
						"hour": "1",
						"score": 8,
						"tag": "家庭｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11cc",
						"name": "曼哈顿天际线",
						"city_id": "56b45d951a0b847ff8eedc88",
						"hour": "1",
						"score": 8,
						"tag": "家庭｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11cb",
						"name": "9/11纪念馆",
						"city_id": "56b45d951a0b847ff8eedc88",
						"hour": "1",
						"score": 8,
						"tag": "家庭｜浪漫",
						"__v": 0
					}, {
						"_id": "56b45d9a2ca80584f89d11ca",
						"name": "峭石之巅观景台",
						"city_id": "56b45d951a0b847ff8eedc88",
						"hour": "1",
						"score": 8,
						"tag": "家庭｜浪漫",
						"__v": 0
					}],
					[{
						"_id": "56b45d9a2ca80584f89d11ce",
						"name": "大中央车站",
						"city_id": "56b45d951a0b847ff8eedc88",
						"hour": "0.5",
						"score": 8,
						"tag": "家庭｜浪漫",
						"__v": 0
					}]
				]
			},
			"$$hashKey": "object:506",
			"selectedGuide": {
				"_id": "56b45d9b2ca80584f89d1287",
				"name": "董琪",
				"description": "旧金山",
				"tag": "浪漫 商务 家庭",
				"score": 9,
				"max_person": 7,
				"has_car": true,
				"phone": "4155280389",
				"image_url": null,
				"language": "英语|汉语",
				"payment": null,
				"__v": 0,
				"cover_city": ["56b45d951a0b847ff8eedc7d", "56b45d951a0b847ff8eedc83", "56b45d951a0b847ff8eedc7c"],
				"$$hashKey": "object:483"
			}
		}],
		"start_date": 1455091200000,
		"end_date": 1456387199999,
		"hotel": 5,
		"num_people": 3,
		"num_room": 1,
		"selected_tag": "家庭",
		"guide_plan_type": "one"
	}


}

}());