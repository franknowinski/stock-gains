var OwnedStocks = {
  bindings: {
    stocks: '='
  },
  templateUrl: 'portfolio/stock_card.html',
  controller: function($scope, $filter, StockService, StockHistoryService, StockResource){
    var ctrl = this;
    ctrl.stocks = this.stocks;
    ctrl.totalReturn = 0;
    ctrl.$inject = ['$scope', '$filter', 'StockService', 'StockHistoryService', 'StockResource'];

    function formatDate(date) {
      return $filter('date')(date,'yyyy-MM-dd');
    };

    function calculateBalance(stock, property) {
      return stock.shares * stock[property];
    };

    function assignBalance(stock) {
      stock.currentBalance = stock.shares * stock.Ask;
      stock.previousBalance = stock.shares * stock.previousDay.Close;
      stock.dailyReturn = stock.currentBalance - stock.previousBalance;
      ctrl.totalReturn = ctrl.totalReturn + stock.dailyReturn;
      return stock;
    };

    function assignPreviousDay(stock, quotes) {
      var lastTradeDate = Date.parse(stock.LastTradeDate);
      if (formatDate(lastTradeDate) == quotes.today.Date) {
        stock.previousDay = quotes.previousDay
        stock.Ask = quotes.today.Close;
      } else {
        stock.previousDay = quotes.today;
      }
      return stock;
    };

    ctrl.stocks.forEach(function(stock){
      StockHistoryService.getPreviousDay(stock.symbol).then(function(quotes){
        assignPreviousDay(stock, quotes);
        assignBalance(stock);
      });
    });
  },
  controllerAs: 'portfolio'
};

angular
  .module('app')
  .component('ownedStocks', OwnedStocks);
