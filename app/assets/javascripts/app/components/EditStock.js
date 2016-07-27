var EditStock = {
  bindings: {
    stock: '='
  },
  templateUrl: 'portfolio/edit_stock.html',
  controller: function($scope, StockService){
    var ctrl = this;
    ctrl.$inject = ['$scope', 'StockService'];

    ctrl.editStock = function(stock) {
      StockService.updateStock(stock).then(function(updatedStock){
        // After the stock market closes for the day
        ctrl.stock.currentBalance = updatedStock.data.shares * ctrl.stock.LastTradePriceOnly;
        ctrl.stock.previousBalance = updatedStock.data.shares * ctrl.stock.previousClose;
        ctrl.stock.dailyReturn = ctrl.stock.currentBalance - ctrl.stock.previousBalance;
      })
      $scope.$emit('displayStock');
    };

    ctrl.showStock = function() {
      $scope.$emit('displayStock');
    };
  },
  controllerAs: 'portfolio'
};

angular
  .module('app')
  .component('editStock', EditStock);
