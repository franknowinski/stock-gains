function PortfolioController(Auth, StockResource, StockService){
  var ctrl = this;

  function clearForm(error) {
    ctrl.error = error, ctrl.stock = '';
  };

  function setStocks(stocks) {
    StockService.getStocks(stocks).then(function(stocks){
       ctrl.stocks = stocks.length == undefined ? [stocks] : stocks;
    });
  };

  ctrl.addStock = function(){
    ctrl.error = '';
    StockService.queryStock(this.stock.symbol, ctrl.stocks).then(function(stock){
      if (typeof(stock) == "string"){
        clearForm(stock);
      } else {
        StockResource.create({stock: ctrl.stock}, function(stocks){
          setStocks(stocks), ctrl.stock = '', ctrl.displayForm = false;
        });
      };
    });
  };

  ctrl.removeStock = function(stock){
    StockResource.delete({symbol: stock.symbol}, function(stocks){
      stocks.length > 0 ? setStocks(stocks) : ctrl.stocks = '';
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
