;(function(){
'use strict';

angular.module('app.directives', [])
.directive('travellerHeader', [
    function () {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/travellerHeader/travellerHeader.tpl.html',
        controller: 'HeaderCtrl',
        link: function (scope, iElement, iAttrs) {
        }
    };
}]);

})();
