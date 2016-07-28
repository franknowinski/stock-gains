var EditStock = {
  bindings: {
    stock: '='
  },
  templateUrl: 'portfolio/edit_stock.html',
  controller: function($scope, StockService){
    var ctrl = this;
    ctrl.$inject = ['$scope', 'StockService'];

    ctrl.editStock = function(stock) {
      StockService.updateStock(stock).then(function(updatedStock) {
        ctrl.stock.currentBalance = updatedStock.data.shares * ctrl.stock.Ask;
        ctrl.stock.previousBalance = updatedStock.data.shares * ctrl.stock.previousDay.Close;
        ctrl.stock.dailyReturn = ctrl.stock.currentBalance - ctrl.stock.previousBalance;
      });
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
