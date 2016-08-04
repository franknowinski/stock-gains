function PortfolioController(Auth, usersStocks){
  var ctrl = this;
  ctrl.stocks = usersStocks;

  Auth.currentUser().then(function(user) {
    ctrl.user = user;
  });
};

angular
  .module('app')
  .controller('PortfolioController', ['Auth', 'usersStocks', PortfolioController]);
