function PortfolioController($scope, Auth, StockService){
  var ctrl = this;

  function setStocks(stocks) {
    StockService.getStocks(stocks).then(function(stocks){
       ctrl.stocks = stocks.length == undefined ? [stocks] : stocks;
    });
  };

  $scope.$on('updateStocks', function(emitEvent, stocks) {
    ctrl.stocks = setStocks(stocks), ctrl.displayForm = false;
  });

  Auth.currentUser().then(function(user){
    ctrl.user = user;
    setStocks(user.stocks);
  });
};

angular
  .module('app')
  .controller('PortfolioController', ['$scope', 'Auth', 'StockService', PortfolioController]);
