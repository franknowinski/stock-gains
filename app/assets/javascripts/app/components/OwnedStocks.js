var OwnedStocks = {
  bindings: {
    stocks: '='
  },
  templateUrl: 'portfolio/stock_card.html',
  controller: function($scope, $filter, StockHistoryService, StockResource){
    var ctrl = this;
    ctrl.stocks = this.stocks;
    ctrl.$inject = ['$scope', '$filter', 'StockHistoryService', 'StockResource'];

    $scope.$on('displayStock', function() {
      ctrl.showContent = true, ctrl.removeStock = false, ctrl.editStockForm = false;
    });

    ctrl.deleteStock = function(deleteStock) {
      StockResource.delete({symbol: deleteStock.symbol}, function(stock){
        $scope.$emit('removeStock', stock);
      });
    };

    ctrl.editStockForm = function(){
      debugger;
    };
  },
  controllerAs: 'portfolio'
};

angular
  .module('app')
  .component('ownedStocks', OwnedStocks);
