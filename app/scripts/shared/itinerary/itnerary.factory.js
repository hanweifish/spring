;(function() {
'use strict';

angular.module('app.shared')
    .factory('Itinerary', [
        '$http',
        '$q',
        'CitiInfo',
        'Controller',
        ItineraryFactory
    ]);


function ItineraryFactory($http, $q, CitiInfo, Controller) {

    function Itinerary(opt) {
        // this.user_token = '';
        // this.startdate = '';

        // this.city = VisitCity;
        // this.edge = Edge;
        // this.guide_for_whole_trip = GuideInfo;

        // this.num_people = '';
        // this.num_room = '';
        // this.hotel = '';
        // this.quote_for_one_guide = Quote;
        // this.quote_for_multiple_guides = Quote;

        // this.choose_one_guide_solution = false;
        // this.itinerary_id = '';
        // this.reservation_id = '';
        // this.order = Order;
    }



    Itinerary.prototype.getSpots = function(){
        var that = this;
        var deferred = $q.defer();
        var promise = [];
         _.each(this.children.city_plan, function(city){
            promise.push(            
                that.getSpot(city.id, city.allocate_days, that.children.selected_tag)
                    .then(function(res){
                        city.spots = res.data;        
                })
            )
        })

        $q.all(promise).then(function(){
            deferred.resolve();
        })
        return deferred.promise;
    }


    Itinerary.prototype.getSpot = function(id, days, selected_tag){
        return $http.post(Controller.base() + 'api/spots', {
            'city_id': id,
            'total_days': days,
            'selected_tag': selected_tag
        })
    };


    Itinerary.prototype.updateSpots = function(tour, id, num_days){

    };


    Itinerary.prototype.getCityInfo = function(){
        var deferred = $q.defer();
        _.each(this.children.city_plan, function(plan){
            plan.city = CitiInfo.getCitybyId(plan.id);
            deferred.resolve();
        })
        return deferred.promise;
    };

     Itinerary.prototype.getSpotIndex = function(){
        var deferred = $q.defer();
        _.each(this.children.city_plan, function(plan){
            _.each(plan.spots.plan, function(spot){
                console.log(spot);
            })
            deferred.resolve();
        })
        return deferred.promise;
    };


    return new Itinerary();

}

}());
