;(function() {
'use strict';

angular.module('app.shared')
    .factory('CitiInfo', [
        '$http',
        'Controller',
        CitiInfoFactory
    ]);


function CitiInfoFactory($http, Controller) {

    function CitiInfo() {
        // this.city_id  = '';
        // this.name = '';
        // this.cn_name = '';
        // this.suggest = 0;
        // this.min = 0;
        // this.alias = [];
        this.children = [];
    }

    CitiInfo.prototype.getList = function(){
        var that = this;
        return $http.get(Controller.base() + 'api/cities').then(function(res){
            that.children = _.map(res.data, function(city){
                return {
                    name: city.cn_name,
                    id: city._id,
                    min: city.min_day,
                    max: city.max_day,
                    alias: city.alias,
                    region: city.region
                }
            })
        });
    }

    CitiInfo.prototype.getCitybyId = function(id) {
        return _.filter(this.children, function(child){
            return child.id === id;
        })[0];
    }

    return new CitiInfo();
}

}());
