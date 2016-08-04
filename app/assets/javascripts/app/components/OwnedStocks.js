var OwnedStocks = {
  bindings: {
    stocks: '='
  },
  templateUrl: 'portfolio/stock_card.html',
  controller: function($scope, StockService, StockHistoryService, StockResource, DateService, Stock){
    var ctrl = this;
    ctrl.$inject = ['$scope', 'StockService', 'StockHistoryService', 'StockResource', 'DateService', 'Stock'];

    ctrl.stocks = this.stocks;
    ctrl.totalReturn = 0;

    ctrl.stocks.forEach(function(stock){
      StockHistoryService.getPreviousDay(stock.symbol).then(function(quotes){
        Stock.assignPreviousDay(stock, quotes);
        ctrl.totalReturn = ctrl.totalReturn + stock.dailyReturn;
      });
    });
  },
  controllerAs: 'portfolio'
};

angular
  .module('app')
  .component('ownedStocks', OwnedStocks);
