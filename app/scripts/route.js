(function() {

    angular.module("bottlerocket").config(router);

})();



function router($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: './app/partials/home/home.tpl.html',
            controller: "HomeController as home"
        }).state('category', {
            url: '/:category_alias',
            templateUrl: './app/partials/category/category.tpl.html',
            controller: "CategoryController as category"
        })
        .state('restaurant', {
            url: '/:category_alias/:restaurant_alias',
            templateUrl: './app/partials/restaurant/restaurant.tpl.html',
            controller: "RestaurantController as restaurant"
        });



    $urlRouterProvider.otherwise('/');
}