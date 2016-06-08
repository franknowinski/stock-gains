function StocksController($scope, StockService){
  ctrl = this;
  ctrl.stockData = [];

  ctrl.lookup = function(){
    ctrl.error = '';

    StockService.queryStock(this.ticker).then(function(stock){
      typeof(stock) == 'object' ? ctrl.stockData.push(stock) : ctrl.error = stock;
    });
    ctrl.ticker = '';
  }
};
angular
  .module('app')
  .controller('StocksController', StocksController);
