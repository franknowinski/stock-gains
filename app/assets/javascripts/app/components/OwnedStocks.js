var OwnedStocks = {
  bindings: {
    stocks: '='
  },
  templateUrl: 'portfolio/stock_card.html',
  controller: function($scope, $filter, StockHistoryService){
    var ctrl = this;
    ctrl.stocks = this.stocks;
    ctrl.$inject = ['$scope', '$filter', 'StockHistoryService'];

    $scope.$on('displayStock', function() {
      ctrl.showContent = true, ctrl.removeStock = false, ctrl.editStockForm = false;
    });
    // 
    // function formatDate(date) {
    //   return $filter('date')(date,'yyyy-MM-dd');
    // };
    //
    // function calculateBalance(s, property) {
    //   return ctrl.stock.shares * s[property];
    // };
    //
    // function assignBalance(stock) {
    //   ctrl.stock.currentBalance = calculateBalance(stock, 'Ask');
    //   ctrl.stock.previousBalance = calculateBalance(stock.previousDay, 'Close');
    //   ctrl.stock.dailyReturn = ctrl.stock.currentBalance - ctrl.stock.previousBalance;
    // };
    //
    // function assignPreviousDay(quotes) {
    //   var lastTradeDate = Date.parse(ctrl.stock.LastTradeDate);
    //   if (formatDate(lastTradeDate) == quotes.today.Date) {
    //     ctrl.stock.previousDay = quotes.previousDay
    //     ctrl.stock.Ask = quotes.today.Close;
    //   } else {
    //     ctrl.stock.previousDay = quotes.today;
    //   }
    // };

    ctrl.editStockForm = function(){
      debugger;
    };
  },
  controllerAs: 'portfolio'
};

angular
  .module('app')
  .component('ownedStocks', OwnedStocks);
