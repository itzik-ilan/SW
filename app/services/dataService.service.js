angular
    .module('myApp')
    .factory('dataService', dataService);

dataService.$inject = ['$http'];

function dataService($http) {

    var baseUrl = 'https://swapi.co/api/';

    return {
        getPeople: getPeople,
        getPeopleByUrl: getPeopleByUrl
    };

    ///////////////////////////////////////////////////////

    function getPeople() {
        return $http.get(baseUrl + 'people')
            .then(getPeopleComplete)
            .catch(getPeopleFailed);

        function getPeopleComplete(response) {
            return response.data.results;
        }

        function getPeopleFailed(error) {
            alert('XHR Failed: ' + error.data);
        }
    }

    function getPeopleByUrl(url) {
      return $http.get(url)
          .then(getPeopleByUrlComplete)
          .catch(getPeopleByUrlFailed);

      function getPeopleByUrlComplete(response) {
          return response.data;
      }

      function getPeopleByUrlFailed(error) {
          alert('XHR Failed: ' + error.data);
      }

    }




}
