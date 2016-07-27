function PortfolioController($scope, Auth, usersStocks, StockService, StockResource){
  var ctrl = this;

<<<<<<< HEAD
  function assignStocks(stocks) {
    for(var i = 0; i < stocks.length; i++) {
      stocks[i].id = usersStocks.data[i].id;
      stocks[i].shares = usersStocks.data[i].shares;
    };
=======
<<<<<<< HEAD
  ctrl.work = function () {
    $(function () {
      $('.modal-trigger').leanModal();
    });
  };

  ctrl.work();

  function getTickers(stocks) {
    return stocks.map(function(s){return s.symbol;}).join('+');
  };

  function setStocks(stocks) {
    StockService.getStocks(getTickers(stocks)).then(function(stocks){
       ctrl.stocks = stocks.length == undefined ? [stocks] : stocks;
    });
  };
=======
  StockService.getStocks(stockTickers).then(function(stocks){
>>>>>>> 3e22d09e6f20f696b41040e6ba5e11d9713f6bea
    ctrl.stocks = stocks.length == undefined ? [stocks] : stocks;
  };

  function stockTickers(stocks) {
    return stocks.map(function(s){return s.symbol;}).join('+');
  };

  StockService.getStockData(stockTickers(usersStocks.data)).then(function(stocks) {
    assignStocks(stocks);
  });
>>>>>>> e02e2bd94c596ef5c6a1e4834b75623c05c2cf3c

  $scope.$on('addStock', function(e, savedStock) {
    StockService.getStockData(savedStock.symbol).then(function(stock) {
      stock.shares = savedStock.shares;
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
