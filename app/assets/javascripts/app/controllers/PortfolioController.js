function PortfolioController(StockService){
  var ctrl = this;

  ctrl.addStock = function(){
    verifyStock(this.ticker)
  };

  function verifyStock(ticker) {
    ctrl.error = '';
    StockService.queryStock(ticker).then(function(stock){
      if (typeof(stock) == "string"){
        ctrl.error =  stock;
      }
    });
  };
};
angular
  .module('app')
  .controller('PortfolioController', PortfolioController);
