;(function() {
'use strict';

/**
 * Remove the city which the region is 0
 */
angular.module('app')
.filter('cityFilter', function() {
    return function(cities) {
        return _.filter(cities, function(city){
            return city.city.region !== 0;
        })
    };
})

}());