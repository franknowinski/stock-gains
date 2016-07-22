var OwnedStock = {
  bindings: {
    stock: '='
  },
  templateUrl: 'portfolio/stock.html',
  controller: function($scope){
    var ctrl = this;
    ctrl.$inject = ['$scope'];

    $scope.$on('displayStock', function() {
      ctrl.showContent = true;
    });
  },
  controllerAs: 'portfolio'
};

angular
  .module('app')
  .component('ownedStock', OwnedStock);
