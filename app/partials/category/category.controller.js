(function() {

    angular.module("bottlerocket").controller('CategoryController', CategoryController);


    function CategoryController(RestaurantService, $state, $stateParams) {
        var vm = this;
        var category_alias, restaurants;
        RestaurantService.getRestaurants().then(onGetRestaurantSuccess, onGetRestaurantError)

        function onGetRestaurantSuccess(response) {
            category_alias = $stateParams.category_alias;
            restaurants = _.filter(response, { category_alias: category_alias });
            if (_.isEmpty(restaurants)) {
                $state.go('home');
                return;
            }
            vm.restaurants = restaurants;
        }

        function onGetRestaurantError(repsonse) {

        }
    }

})();