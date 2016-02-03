;(function(){
'use strict';

angular.module('app.directives')
.directive('travellerSelect', ['$timeout',
    function ($timeout) {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/travellerSelect/travellerSelect.tpl.html',
        controller: 'TravellerSelectCtrl',
        scope: {
        	options: '=',
        	selected: '=',
        	placeholder: '@',
            key:'@',
            icon:'@',
            region: '=',
        },
        link: linkFunc.bind(null, $timeout)
    };
}]);


function linkFunc($timeout, scope, elem, attrs) {

    scope.selected = undefined;
    scope.showlayer = false;

    var searchInput = elem.find('div.form-select');

    searchInput.mousedown(function(e){
        if (e.target.tagName !== 'I') {
            scope.showlayer = true;
            $timeout(function(){}, 0);
        }
    });


    searchInput.mouseleave(function(e) {
        scope.showlayer = false;
        // $timeout(function(){}, 0);
    });

    searchInput.on('keyup', _.debounce(searchHandler, 200));

    // scope.$watch('showlayer', function(val){
    //     console.log(val);
    // })

    scope.$watch('options', function(val){
        if (val) {
            scope.options_real = _.clone(scope.options);
        };
    })
    /**
     * handle the search as user types
     */
    function searchHandler(e) {
        var term = e.target.value;
        var regexp = new RegExp(term, 'i');

        scope.options_real = _(scope.options)
        .map(function(city) {
            if (regexp.test(city.name)) {
                return city;
            } else {
                for(var i = 0; i < city.alias.length; i++) {
                    if (regexp.test(city.alias[i])) {
                        return city;
                    }
                }
            }
        })
        .compact()
        .value();

        $timeout(function(){}, 0);
    }



    scope.show = function($event){
       scope.showlayer = !scope.showlayer;
    }


    scope.selectCity = function(option){
        scope.selected_city_name = option.name;
        scope.selected = option.id;
        scope.showlayer = false;
        scope.region = option.region;
    }
}



})();
