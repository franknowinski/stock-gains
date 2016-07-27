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
        debugger;
        ctrl.stock.currentBalance = updatedStock.data.shares * ctrl.stock.Ask;
        ctrl.stock.previousBalance = updatedStock.data.shares * ctrl.stock.PreviousClose;
        ctrl.stock.dailyReturn = ctrl.stock.currentBalance - ctrl.stock.previousBalance;
        $scope.$emit('displayStock');
      })
      // .then(function(res){
        ctrl.showContent = true;
        ctrl.editStock = false;
      // })
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
