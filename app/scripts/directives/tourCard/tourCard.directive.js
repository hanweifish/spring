;(function(){
'use strict';

angular.module('app.directives')
.directive('tourCard', [
    function () {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/tourCard/tourCard.tpl.html',
        controller: 'TourCardCtrl',
        scope: {
        	'order': '=',
            'type': '@'
        },
        link: linkFunc
    };
}]);


function linkFunc (scope, elem, attrs) {
}

})();
