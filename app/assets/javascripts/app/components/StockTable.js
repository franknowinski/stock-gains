var StockTable = {
  bindings: {
    stock: '='
  },
  templateUrl: 'portfolio/stock_table.html',
  controller: function($scope, StockHistoryService){
    var ctrl = this;
    ctrl.$inject = ['$scope', 'StockHistoryService'];

    var today = new Date().setHours(0,0,0,0);
    Date.parse(ctrl.stock.LastTradeDate) == today ? ctrl.isToday = true : ctrl.isToday = false;

    function calculateBalance(s, property) {
      return ctrl.stock.shares * s[property];
    };

    StockHistoryService.getPreviousDayStock(this.stock.symbol).then(function(quotes){
      ctrl.stock.Ask = quotes.today.Close;
      ctrl.stock.previousClose = quotes.previousDay.Close;
      ctrl.stock.currentBalance = calculateBalance(quotes.today, 'Close');
      ctrl.stock.previousBalance = calculateBalance(quotes.previousDay, 'Close');
      ctrl.stock.dailyReturn = ctrl.stock.currentBalance - ctrl.stock.previousBalance;
    });
  },
  controllerAs: 'portfolio'
};

angular
  .module('app')
  .component('stockTable', StockTable);
