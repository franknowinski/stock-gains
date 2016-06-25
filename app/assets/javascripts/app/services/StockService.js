function StockService($http) {

  function formatURL(ticker) {
    return 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22' + ticker + '%22)&env=store://datatables.org/alltableswithkeys&format=json';
  };

  function validateNewStock(user, symbol){
    return user.stocks.map(function(s){return s.symbol;}).includes(symbol);
  };

  this.queryStock = function(ticker, user) {
    return $http.get(formatURL(ticker)).then(function(res){
      var quote = res.data.query.results.quote;
      if (quote.Ask == null) {
        return 'Unable to find stock data for that ticker.'
      } else if (validateNewStock(user, quote.symbol)) {
          return quote.Name + ' is already apart of your portfolio.';
      } else {
        return quote;
      };
    });
  };
};

angular
  .module('app')
  .service('StockService', StockService);
