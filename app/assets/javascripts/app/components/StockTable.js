var StockTable = {
  bindings: {
    stock: '='
  },
  templateUrl: 'portfolio/stock_table.html',
  controller: function($scope, $filter, StockHistoryService){
    var ctrl = this;
    ctrl.$inject = ['$scope', '$filter', 'StockHistoryService'];

    function calculateBalance(s, property) {
      return ctrl.stock.shares * s[property];
    };

    function formatDate(date) {
      return $filter('date')(date,'yyyy-MM-dd');
    };

    StockHistoryService.getPreviousDayStock(this.stock.symbol).then(function(quotes){
      // var today = new Date().setHours(0,0,0,0);
      var lastTradeDate = Date.parse(ctrl.stock.LastTradeDate);
      // ctrl.isToday = lastTradeDate == today ? true : false;

      if (formatDate(lastTradeDate) != quotes.today.Date) {
        ctrl.stock.previousDay = quotes.today;
      } else {
        ctrl.stock.previousDay = quotes.previousDay
        ctrl.stock.Ask = quotes.today.Close;
      }
      ctrl.stock.currentBalance = calculateBalance(ctrl.stock, 'Ask');
      ctrl.stock.previousBalance = calculateBalance(ctrl.stock.previousDay, 'Close');
      ctrl.stock.dailyReturn = ctrl.stock.currentBalance - ctrl.stock.previousBalance;
    });
  },
  controllerAs: 'portfolio'
};

angular
  .module('app')
  .component('stockTable', StockTable);
