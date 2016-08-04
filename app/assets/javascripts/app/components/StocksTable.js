var StocksTable = {
  bindings: {
    stocks: '='
  },
  templateUrl: 'portfolio/stocks_table.html',
  controller: function($scope, StockResource) {
    var ctrl = this;
    ctrl.$inject = ['$scope', 'StockResource'];

    ctrl.deleteStock = function(deleteStock) {
      StockResource.delete({symbol: deleteStock.symbol}, function(stock){
        $scope.$emit('removeStock', stock);
      });
    };
  },
  controllerAs: 'portfolio'
};

angular
  .module('app')
  .component('stocksTable', StocksTable);
