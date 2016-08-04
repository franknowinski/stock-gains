var StockRow = {
  bindings: {
    stock: '='
  },
  templateUrl: 'portfolio/body/stock_row.html',
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
  .component('stockRow', StockRow);
