function StocksController(StockService){
  var ctrl = this;
  ctrl.stockData = [];

  ctrl.lookup = function(){
    ctrl.error = '';
    StockService.queryStock(this.symbol).then(function(stock){
      typeof(stock) == 'object' ? ctrl.stockData.push(stock) : ctrl.error = stock;
    });
    ctrl.symbol = '';
  }
};
angular
  .module('app')
  .controller('StocksController', ['StockService', StocksController]);
