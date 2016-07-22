function PortfolioController($scope, Auth, stockTickers, StockService, StockResource){
  var ctrl = this;

  StockService.getStocks(stockTickers).then(function(stocks){
    ctrl.stocks = stocks.length == undefined ? [stocks] : stocks;
  });

  $scope.$on('addStock', function(e, stock) {
    StockService.getStocks(stock.symbol).then(function(stock){
      ctrl.stocks == undefined ? ctrl.stocks = [stock] : ctrl.stocks.push(stock);
    })
  });

  $scope.$on('removeStock', function(e, stock) {
    for(var i = 0; i < ctrl.stocks.length; i++){
      if (ctrl.stocks[i].symbol == stock[0].symbol) { ctrl.stocks.splice(i, 1); }
    };
  });

  Auth.currentUser().then(function(user){
    ctrl.user = user;
  });
};

angular
  .module('app')
  .controller('PortfolioController', ['$scope', 'Auth', 'stockTickers', 'StockService', 'StockResource', PortfolioController]);
