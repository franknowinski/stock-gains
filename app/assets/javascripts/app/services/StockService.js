function StockService($http) {

  function formatURL(ticker) {
    return 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22' + ticker + '%22)&env=store://datatables.org/alltableswithkeys&format=json';
  };

  this.queryStock = function(ticker) {
    return $http.get(formatURL(ticker)).then(function(res){
      if (res.data.query.results.quote.Bid == null) {
        return 'Unable to find stock data for that ticker.'
      } else {
        return res.data.query.results.quote;
      }
    });
  };
};

angular
    .module('app')
    .service('StockService', StockService);
