(function() {

    angular.module("bottlerocket").directive("navbar", navbar);


    function navbar() {
        return {
            templateUrl: './app/directives/navbar/navbar.tpl.html',
            controller: NavbarController

        }

    }

    function NavbarController($scope, $timeout, RestaurantService, $state) {
        $scope.showDrawerMenuWrapper = false;
        RestaurantService.getRestaurants().then(onGetRestaurantsSuccess, onGetRestaurantsError);

        $scope.restaurants_by_category = {};
        $scope.toggleDrawerMenu = function(event, show) {
            if (show) {
                $scope.showDrawerMenuWrapper = true;
                $scope.showDrawerMenu = true;
            } else {
                $scope.showDrawerMenu = false;
                $timeout(function() {
                    $scope.showDrawerMenuWrapper = false;

                }, 500)
            }
        }

        $scope.onLinkClicked = function(event, key) {
            $state.go('category', { category_alias: _.kebabCase(key) })
        }


        function onGetRestaurantsSuccess(response) {
            $scope.restaurants_by_category = _.groupBy(response, 'category');
        }

        function onGetRestaurantsError(data) {
            console.log(data)
        }

    }

})();