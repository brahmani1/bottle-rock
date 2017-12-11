(function() {

    angular.module("bottlerocket").controller('RestaurantController', RestaurantController);


    function RestaurantController(RestaurantService, $stateParams, $state) {
        var vm = this;

        var category_alias, restaurant_alias;
        RestaurantService.getRestaurants().then(onGetRestaurantSuccess, onGetRestaurantError)

        function onGetRestaurantSuccess(response) {
            category_alias = $stateParams.category_alias;
            restaurant_alias = $stateParams.restaurant_alias;
            vm.restaurant = _.find(response, { category_alias: category_alias, restaurant_alias: restaurant_alias });
            if (_.isEmpty(vm.restaurant)) {
                $state.go('home');
                return;
            }
            var location = { lat: vm.restaurant.location.lat, lng: vm.restaurant.location.lng };
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: location
});
var marker = new google.maps.Marker({
    position: location,
    map: map
});
            console.log(vm.restaurant);
        }

        function onGetRestaurantError(response) {

        }

    }

})();

//