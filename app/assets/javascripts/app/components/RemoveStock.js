var RemoveStock = {
  bindings: {
    stock: '='
  },
  templateUrl: 'portfolio/remove_stock.html',
  controller: function($scope, StockResource){
    var ctrl = this;
    ctrl.$inject = ['$scope', 'StockResource'];

    ctrl.deleteStock = function(deleteStock) {
      StockResource.delete({symbol: deleteStock.symbol}, function(stock){
        $scope.$emit('removeStock', stock);
      });
    };

    ctrl.showStock = function() {
      $scope.$emit('displayStock');
    }
  },
  controllerAs: 'portfolio'
};

angular
  .module('app')
  .component('removeStock', RemoveStock);
