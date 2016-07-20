function AddStock() {
   return {
     templateUrl: 'portfolio/add_stock_form.html'
   };
};

angular
  .module('app')
  .directive('addStock', AddStock);
