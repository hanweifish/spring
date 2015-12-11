;(function(){
'use strict';

angular.module('app.directives')
.directive('travellerBanner', [
    function () {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/travellerBanner/travellerBanner.tpl.html',
        controller: 'BannerCtrl',
        link: function (scope, iElement, iAttrs) {
        }
    };
}]);

})();
