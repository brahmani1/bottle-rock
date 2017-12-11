(function() {

    angular.module("bottlerocket").filter("kebabCase", kebabCase);

    function kebabCase() {

        return function(input) {

            return _.kebabCase(input);
        }
    }

})();