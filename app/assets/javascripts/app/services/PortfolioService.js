function PortfolioService($http) {

  function formatURL(ticker) {
    return 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22' + ticker + '%22)&env=store://datatables.org/alltableswithkeys&format=json';
  };

  this.persistStock = function(stock) {
    return $http.post('/api/v1/stocks', stock)
  };
};

angular
    .module('app')
    .service('PortfolioService', PortfolioService);
