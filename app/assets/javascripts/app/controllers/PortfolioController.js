function PortfolioController($scope, Auth, usersStocks, StockService, StockResour){
  var ctrl = this;

  function assignSharesAndId(stocks) {
    for(var i = 0; i < stocks.length; i++) {
      stocks[i].id = usersStocks.data[i].id;
      stocks[i].shares = usersStocks.data[i].shares;
    };
    ctrl.stocks = stocks.length == undefined ? [stocks] : stocks;
  };

  function stockTickers(stocks) {
    return stocks.map(function(s){return s.symbol;}).join('+');
  };

  StockService.getStockData(stockTickers(usersStocks.data)).then(function(stocks) {
    assignSharesAndId(stocks.length == undefined ? [stocks] : stocks);
  });

  $scope.$on('addStock', function(e, savedStock) {
    StockService.getStockData(savedStock.symbol).then(function(stock) {
      stock.id = savedStock.id, stock.shares = savedStock.shares;
      ctrl.stocks == undefined ? ctrl.stocks = [stock] : ctrl.stocks.push(stock);
    })
  });

  $scope.$on('removeStock', function(e, stock) {
    for(var i = 0; i < ctrl.stocks.length; i++){
      if (ctrl.stocks[i].symbol == stock[0].symbol) { ctrl.stocks.splice(i, 1); }
    };
  });

  Auth.currentUser().then(function(user) {
    ctrl.user = user;
  });
};

angular
  .module('app')
  .controller('PortfolioController', ['$scope', 'Auth', 'usersStocks', 'StockService', 'StockResource', PortfolioController]);
