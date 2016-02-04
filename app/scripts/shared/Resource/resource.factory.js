;(function() {
'use strict';

angular.module('app.shared')
    .factory('Resource', [
        '$http',
        '$q',
        'Controller',
        ResourceFactory
    ]);


function ResourceFactory($http, $q, Controller) {

    function Resource() {
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



    Resource.prototype.getAllUsers = function(){
        return $http.get(Controller.base() + 'api/allusers');
    }

    Resource.prototype.getAllCities = function(){
        return $http.get(Controller.base() + 'api/cities');
    }

    Resource.prototype.getAllOrders = function(){
        return $http.get(Controller.base() + 'api/allorders');
    }

    Resource.prototype.getAllSpots = function(){
        return $http.get(Controller.base() + 'api/allspots');
    }

    Resource.prototype.getAllGuides = function(){
        return $http.get(Controller.base() + 'api/allguides');
    }   

    return new Resource();

}

}());
