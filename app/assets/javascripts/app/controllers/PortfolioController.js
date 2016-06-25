function PortfolioController(Auth, Stock, StockService){
  var ctrl = this;

  function clearForm(error) {
    ctrl.error = error, ctrl.stock = '';
  };

  function formatStockObject(stock, shares){
    stockObject = {};
    for (var key in stock){
      words = key.match(/[A-Z][a-z]+/g);
      if (words != null) {
        formattedKey = words.map(function(word){
           return word.toLowerCase();
         }).join('_');
        stockObject[formattedKey] = stock[key];
      };
    };
    stockObject["shares"] = shares;
    return stockObject;
  };

  ctrl.addStock = function(){
    ctrl.error = '';
    StockService.queryStock(this.stock.ticker, ctrl.user).then(function(stock){
      if (typeof(stock) == "string"){
        clearForm(stock);
      } else {
        Stock.create({stock: formatStockObject(stock, ctrl.stock.shares)}, function(stock){
          ctrl.stocks.push(stock), ctrl.stock = '', ctrl.displayForm = false;
        });
      };
    });
  };

  Auth.currentUser().then(function(user){
    ctrl.user = user;
    ctrl.stocks = user.stocks;
  });
};

angular
  .module('app')
  .controller('PortfolioController', PortfolioController);
