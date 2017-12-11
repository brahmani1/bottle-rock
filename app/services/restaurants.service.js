(function() {


    angular.module('bottlerocket').service("RestaurantService", RestaurantService);

    function RestaurantService($http, $q) {

        var service = {};
        var restaurants = '';
        service.getRestaurants = function() {

            if (!_.isEmpty(restaurants)) {
                return restaurants;
            }

            var deferred = $q.defer();
            $http.get('./app/mock/restaurants.json').then(function(response) {
                _.map(response.data.restaurants, function(res) {
                    res.category_alias = _.kebabCase(res.category);
                    res.restaurant_alias = _.kebabCase(res.name);
                });
                deferred.resolve(response.data.restaurants);

            }, function() {
                deferred.reject("Unknown error")
            });

            restaurants = deferred.promise;
            return restaurants;
        }


        return service;


    }


})();