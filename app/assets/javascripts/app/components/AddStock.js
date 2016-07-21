var AddStock = {
  templateUrl: 'portfolio/add_stock_form.html',
  controller: function($scope, StockResource, StockService){
    var ctrl = this;
    ctrl.$inject = ['$scope', 'StockResource', 'StockService'];

    function clearForm(error) {
      ctrl.error = error, ctrl.stock = '';
    };

    ctrl.addStock = function(){
      ctrl.error = '';
      StockService.queryStock(this.stock.symbol, StockResource.query()).then(function(stock){
        if (typeof(stock) == 'string'){
          clearForm(stock);
        } else {
          StockResource.create({stock: ctrl.stock}, function(stocks){
            $scope.$emit('updateStocks', stocks), ctrl.stock = '';
          });
        };
      });
    };
  },
  controllerAs: 'portfolio'
};

angular
  .module('app')
  .component('addStock', AddStock);
