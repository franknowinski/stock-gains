function PortfolioController(Auth, StockResource, StockService){
  var ctrl = this;

  function clearForm(error) {
    ctrl.error = error, ctrl.stock = '';
  };

  function setStocks(stocks) {
    StockService.getStocks(stocks).then(function(res){
       ctrl.stocks = res.length == undefined ? [res] : res;
    });
  };

  ctrl.addStock = function(){
    ctrl.error = '';
    StockService.queryStock(this.stock.symbol, ctrl.user).then(function(stock){
      if (typeof(stock) == "string"){
        clearForm(stock);
      } else {
        StockResource.create({stock: ctrl.stock}, function(stocks){
          setStocks(stocks);
          ctrl.stock = '', ctrl.displayForm = false;
        });
      };
    });
  };

  Auth.currentUser().then(function(user){
    ctrl.user = user;
    setStocks(user.stocks);
  });
};

angular
  .module('app')
  .controller('PortfolioController', PortfolioController);
