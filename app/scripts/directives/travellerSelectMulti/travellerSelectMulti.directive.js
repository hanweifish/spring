;(function(){
'use strict';

angular.module('app.directives')
.directive('travellerSelectMulti', ['$timeout', 'toastr',
    function ($timeout, toastr) {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/travellerSelectMulti/travellerSelectMulti.tpl.html',
        controller: 'travellerSelectMultiCtrl',
        scope: {
        	options: '=',
        	selected: '=',
        	placeholder: '@',
            icon:'@'
        },
        link: linkFunc.bind(null, $timeout, toastr)
    };
}]);


function linkFunc($timeout, toastr, scope, elem, attrs) {

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

    scope.$watch('options', function(val){
        if (val) {
            scope.options_real = _.clone(val);
        };
    })

    scope.$watch('selected', function(val){
        if(val && val.length === 0) {
            scope.selected_city = [];
            scope.selected_city_ids = [];
        }
    })

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


    scope.selected = [];
    scope.selected_city = [];
    scope.selected_show = true;

    scope.addSelectCity = function(option){
        scope.selected_show = false;
        if (option.id && scope.selected.indexOf(option.id) === -1) {
            scope.selected.push(option.id);
            scope.selected_city.push(option);
            scope.showlayer = false;
            searchInput[0].value = '';
        } else {
            toastr.error("城市已经添加");
        }
    }

    scope.removeSelectedCity = function(city){
        var index = scope.selected.indexOf(city);
        scope.selected_city.splice(index, 1);
        scope.selected.splice(index, 1);
    }


    scope.showlayer = false;

    scope.show = function(){
        scope.showlayer = !scope.showlayer;
    }

}



})();
