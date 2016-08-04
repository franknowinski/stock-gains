var UserStock = {
  bindings: {
    stock: '='
  },
  templateUrl: 'portfolio/user_stock.html',
  controller: function($scope, $filter, StockHistoryService){
    var ctrl = this;
    ctrl.$inject = ['$scope', '$filter', 'StockHistoryService'];
    ctrl.deleteStockPrompt = function() {
      debugger;
    }
  },
  controllerAs: 'portfolio'
};

angular
  .module('app')
  .component('userStock', UserStock);
