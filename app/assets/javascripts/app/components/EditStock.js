var EditStock = {
  bindings: {
    stock: '='
  },
  templateUrl: 'portfolio/edit_stock.html',
  controller: function($scope, StockService){
    var ctrl = this;
    ctrl.$inject = ['$scope', 'StockService'];

    function updateValues(stock) {
      ctrl.stock.currentBalance = stock.shares * ctrl.stock.Ask;
      ctrl.stock.previousBalance = stock.shares * ctrl.stock.previousDay.Close;
      ctrl.stock.dailyReturn = ctrl.stock.currentBalance - ctrl.stock.previousBalance;
    };

    ctrl.editStock = function(stock) {
      StockService.updateStock(stock).then(function(updatedStock) {
        updateValues(updatedStock.data);
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
