(function() {
    'use strict';

angular
    .module('myApp')
    .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('list', {
            url: '/',
            templateUrl: 'app/list/list.html',
            controller: 'ListController as listCtrl'
        })

        .state('item', {
          url: '/:url',
            templateUrl: 'app/item/item.html',
            controller: 'ItemController as itemCtrl'
        });
} //config

})();
