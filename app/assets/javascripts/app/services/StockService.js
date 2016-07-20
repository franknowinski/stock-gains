function StockService($http) {

  function baseUrl(ticker) {
    return 'https://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20where%20symbol%20in%20%28%22' + ticker + '%22%29&env=store://datatables.org/alltableswithkeys&format=json';
  };

  function validateNewStock(ownedStocks, symbol){
    if (ownedStocks != undefined && ownedStocks != "") {
      return ownedStocks.map(function(s){return s.symbol;}).includes(symbol);
    };
  };

  function getTickers(stocks){
    return stocks.map(function(s){return s.symbol;}).join('+');
  };

  this.getStocks = function(stocks){
    return $http.get(baseUrl(getTickers(stocks))).then(function(res){
      return res.data.query.results.quote;
    });
  };

  this.queryStock = function(ticker, ownedStocks) {
    return $http.get(baseUrl(ticker)).then(function(res){
      var quote = res.data.query.results.quote;
      if (quote.Ask == null) {
        return 'Unable to find stock data for that ticker.'
      } else if (validateNewStock(ownedStocks, quote.symbol)) {
        return quote.Name + ' is already apart of your portfolio.';
      } else {
        return quote;
      };
    });
  };
};

angular
  .module('app')
  .service('StockService', ['$http', StockService]);
