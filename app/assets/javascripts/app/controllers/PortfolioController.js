function PortfolioController($scope, Auth, usersStocks, StockService){
  var ctrl = this;
  ctrl.stocks = usersStocks;

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

  // function clearForm(error) {
  //   ctrl.error = error, ctrl.stock = '';
  // };
  //
  //
  // ctrl.addStock = function(){
  //   ctrl.error = '';
  //   StockService.queryStock(this.stock.symbol, StockResource.query()).then(function(stock){
  //     if (typeof(stock) == 'string'){
  //       clearForm(stock);
  //     } else {
  //       StockResource.create({stock: ctrl.stock}, function(stock){
  //         // $scope.$emit('addStock', stock), ctrl.stock = '';
  //         $('#add-stock-modal').closeModal();
  //       });
  //     };
  //   });
  // };
  //
  // ctrl.toggleModal = function() {
  //   $(function () {
  //     $('.modal-trigger').leanModal();
  //   });
  // };
  // ctrl.toggleModal();
};

angular
  .module('app')
  .controller('PortfolioController', ['$scope', 'Auth', 'usersStocks', 'StockService', PortfolioController]);
