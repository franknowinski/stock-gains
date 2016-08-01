function TestService($http){
  this.setStocks = function() {
    return $http.get('api/v1/stocks');
  };
};

angular
  .module('app')
  .service('TestService', ['$http', '$filter', TestService]);
