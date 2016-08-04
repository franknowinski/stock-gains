var AddStock = {
  templateUrl: 'portfolio/add_stock_form.html',
  controller: function($rootScope, StockResource, StockService){
    var ctrl = this;
    ctrl.$inject = ['$rootScope', 'StockResource', 'StockService'];

    function clearForm(error) {
      ctrl.error = error, ctrl.stock = '';
    };

    ctrl.addStock = function(){
      ctrl.error = '';
      StockService.queryStock(this.stock.symbol, StockResource.query()).then(function(stock){
        if (typeof(stock) == 'string'){
          clearForm(stock);
        } else {
          StockResource.create({stock: ctrl.stock}, function(stock){
            $rootScope.$broadcast('addStock', stock);
            ctrl.stock = '';
            $('#add-stock-modal').closeModal();
          });
        };
      });
    };

    ctrl.toggleModal = function() {
      $(function () {
        $('.modal-trigger').leanModal();
      });
    };
    ctrl.toggleModal();
  },
  controllerAs: 'addStock'
};

angular
  .module('app')
  .component('addStock', AddStock);
