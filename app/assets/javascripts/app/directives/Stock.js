function Stock() {
   return {
     templateUrl: 'portfolio/stock.html'
   };
};

angular
  .module('app')
  .directive('stock', Stock);
