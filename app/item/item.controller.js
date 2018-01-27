(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ItemController', ItemController);

    ItemController.$inject = ['dataService'];

    function ItemController(dataService) {

    var vm = this;
    vm.test = "OK";

    // get Item api
    vm.loadItem = function(url) {
      dataService.getPeopleByUrl(url).then(
        function(data) {
            vm.item = data;
        });
    }

    //////////////////////// helpers ///////////////////////////

} //CTRL
})();
