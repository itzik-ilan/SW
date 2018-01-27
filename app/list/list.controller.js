(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ListController', ListController);

    ListController.$inject = ['dataService'];

    function ListController(dataService) {

    var vm = this;

    vm.test = "OK";

    // get People api
    vm.getPeople = function() {
        dataService.getPeople()
        .then(function(data) {
                vm.list = data;

            });
    };

    //////////////////////// helpers ///////////////////////////

} //CTRL
})();
