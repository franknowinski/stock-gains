function PortfolioController(StockService, PortfolioService){
  var ctrl = this;

  // function verifyStock(ticker) {
  //   ctrl.error = '';
  //   StockService.queryStock(ticker).then(function(stock){
  //     if (typeof(stock) == "string"){
  //       ctrl.error =  stock;
  //     }
  //   });
  // };

  ctrl.addStock = function(){
    ctrl.error = '';
    StockService.queryStock(this.stock.ticker).then(function(stock){
      if (typeof(stock) == "string"){
        ctrl.error =  stock;
        ctrl.stock.ticker = '';
        ctrl.stock.shares = '';
      } else {
        PortfolioService.persistStock(ctrl).then(function(stock){
          debugger;
        })
      }
    });
  };
};
angular
  .module('app')
  .controller('PortfolioController', PortfolioController);
