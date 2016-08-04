function StockHistoryService($http, $filter) {

  function previousStockPrices(ticker, startDate, endDate) {
    return "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22" + ticker + "%22%20and%20startDate%20=%20%22" + startDate + "%22%20and%20endDate%20=%20%22" + endDate + "%22&diagnostics=true&env=store://datatables.org/alltableswithkeys&format=json"
  };

  function formatDate(date) {
    return $filter('date')(date,'yyyy-MM-dd')
  };

  function getDates(startDate, endDate) {
    var today = new Date();
    var previousDay = new Date();
    previousDay = previousDay.setDate(previousDay.getDate()-6);
    return [formatDate(previousDay), formatDate(today)];
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
  .service('StockHistoryService', ['$http', '$filter', StockHistoryService]);
