function StockHistoryService($http, DateService) {

  function previousStockPrices(ticker, startDate, endDate) {
    return "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22" + ticker + "%22%20and%20startDate%20=%20%22" + startDate + "%22%20and%20endDate%20=%20%22" + endDate + "%22&diagnostics=true&env=store://datatables.org/alltableswithkeys&format=json"
  };

  function getDates(startDate, endDate) {
    var today = new Date(), previousDay = new Date();
    previousDay = previousDay.setDate(previousDay.getDate()-6);
    return [DateService.formatDate(previousDay), DateService.formatDate(today)];
  };

  this.getPreviousDay = function(ticker){
    var dates = getDates();
    return $http.get(previousStockPrices(ticker, dates[0], dates[1])).then(function(data){
      var quotes = data.data.query.results.quote;
      return {today: quotes[0], previousDay: quotes[1]};
    })
  };
};

angular
  .module('app')
  .service('StockHistoryService', ['$http', 'DateService', StockHistoryService]);
