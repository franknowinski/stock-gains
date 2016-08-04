function StockService($http, StockHistoryService) {
  var service = this;

  function baseUrl(ticker) {
    return "//query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20where%20symbol%20in%20%28%22" + ticker + "%22%29&env=store://datatables.org/alltableswithkeys&format=json"
  };

  function stockTickers(stocks) {
    return stocks.map(function(s){return s.symbol;}).join('+');
  };

  function assignSharesAndId(stocks, quotes) {
    for (var i = 0; i < stocks.length; i++) {
      quotes[i].id = stocks[i].id;
      quotes[i].shares = stocks[i].shares;
    };
    return quotes;
  };

  function validateNewStock(ownedStocks, symbol) {
    if (ownedStocks != undefined && ownedStocks != "") {
      return ownedStocks.map(function(s){return s.symbol;}).includes(symbol);
    };
  };

  service.getStockData = function(ticker) {
    return $http.get(baseUrl(ticker)).then(function(res){
      return res.data.query.results.quote;
    });
  }

  service.getUsersStocks = function() {
    return $http.get('/api/v1/stocks').then(function(res){
      if (res.data.length > 0) {
        return service.setStocks(res.data);
      };
    });
  };

  service.setStocks = function(stocks) {
    return $http.get(baseUrl(stockTickers(stocks))).then(function(res){
      var quotes = res.data.query.results.quote;
      return assignSharesAndId(stocks, quotes.length == undefined ? [quotes] : quotes);
    });
  };

  service.updateStock = function(stock) {
    return $http.put('/api/v1/stocks/' + stock.id, {stock: stock});
  };

  service.queryStock = function(ticker, ownedStocks) {
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
  .service('StockService', ['$http', 'StockHistoryService', StockService]);
