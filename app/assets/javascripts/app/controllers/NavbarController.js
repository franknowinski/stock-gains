function NavbarController($scope, $state, Auth){
  ctrl = this;
  ctrl.addStock = function(){
    debugger;
    // ctrl.error = '';
    // StockService.queryStock(this.stock.symbol, StockResource.query()).then(function(stock){
    //   if (typeof(stock) == 'string'){
    //     clearForm(stock);
    //   } else {
    //     StockResource.create({stock: ctrl.stock}, function(stock){
    //       $scope.$emit('addStock', stock), ctrl.stock = ''; $('#add-stock-modal').closeModal();
    //     });
    //   };
    // });
  };

  $scope.signedIn = Auth.isAuthenticated;

  $scope.logout = function(){
    Auth.logout().then(function(user){
      Materialize.toast('Goodbye!', 2000);
      $state.go('home');
    });
  };

  Auth.currentUser().then(function(user) {
     $scope.user = user;
  });

  $scope.$on('devise:new-registration', function(e, user) {
    $scope.user = user;
  });

  $scope.$on('devise:login', function(e, user) {
    $scope.user = user;
  });

  $scope.$on('devise:logout', function(e, user) {
    $scope.user = {};
  });
};

angular
  .module('app')
  .controller('NavbarController', ['$scope', '$state', 'Auth', NavbarController]);
