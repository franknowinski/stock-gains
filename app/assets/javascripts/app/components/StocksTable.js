var StocksTable = {
  bindings: {
    stocks: '='
  },
  templateUrl: 'portfolio/body/stocks_table.html',
  controller: function($rootScope, StockResource) {
    var ctrl = this;
    ctrl.$inject = ['$rootScope', 'StockResource'];

    ctrl.deleteStock = function(stock) {
      StockResource.delete({symbol: stock.symbol}, function(s){
        $rootScope.$broadcast('removeStock', stock);
      });
    };
  },
  controllerAs: 'stocksTable'
};

angular
  .module('app')
  .component('stocksTable', StocksTable);
