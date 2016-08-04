var OwnedStocks = {
  bindings: {
    stocks: '='
  },
  templateUrl: 'portfolio/body/main_section.html',
  controller: function($scope, $rootScope, StockService, StockHistoryService, Stock){
    var ctrl = this;
    ctrl.$inject = ['$scope', '$rootScope', 'StockService', 'StockHistoryService', 'Stock'];

    ctrl.stocks = this.stocks;
    ctrl.totalReturn = 0;

    function setPreviousDay(stock) {
      StockHistoryService.getPreviousDay(stock.symbol).then(function(quotes){
        Stock.assignPreviousDay(stock, quotes);
        ctrl.totalReturn += stock.daysReturn;
      });
    };

    if (ctrl.stocks !== undefined) {
      ctrl.stocks.forEach(function(stock){
        setPreviousDay(stock);
      });
    };

    $rootScope.$on('addStock', function(e, persistedStock) {
      StockService.getStockData(persistedStock.symbol).then(function(stock) {
        stock.id = persistedStock.id, stock.shares = persistedStock.shares;
        setPreviousDay(stock);
        ctrl.stocks === undefined ? ctrl.stocks = [stock] : ctrl.stocks.push(stock)
      });
    });

    $rootScope.$on('removeStock', function(e, deletedStock) {
      for(var i = 0; i < ctrl.stocks.length; i++){
        if (ctrl.stocks[i].symbol == deletedStock.symbol) {
          ctrl.totalReturn -= deletedStock.daysReturn;
          ctrl.stocks.splice(i, 1);
        }
      };
    });
  },
  controllerAs: 'ownedStocks'
};

angular
  .module('app')
  .component('ownedStocks', OwnedStocks);
