function Stock(DateService){
  var stock = {};

  function assignBalance(stock) {
    stock.currentBalance = stock.shares * stock.Ask;
    stock.previousBalance = stock.shares * stock.previousDay.Close;
    stock.daysReturn = stock.currentBalance - stock.previousBalance;
    return stock;
  };

  stock.assignPreviousDay = function(stock, quotes) {
    var lastTradeDate = Date.parse(stock.LastTradeDate);
    if (DateService.formatDate(lastTradeDate) == quotes.today.Date) {
      stock.previousDay = quotes.previousDay
      stock.Ask = quotes.today.Close;
    } else {
      stock.previousDay = quotes.today;
    }
    assignBalance(stock);
    return stock;
  };

  return stock;
};

angular
.module('app')
.factory('Stock', ['DateService', Stock]);
