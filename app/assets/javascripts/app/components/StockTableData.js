var StockTableData = {
  bindings: {
    stock: '='
  },
  templateUrl: 'portfolio/stock_table_data.html',
  controllerAs: 'portfolio'
};

angular
  .module('app')
  .component('stockTableData', StockTableData);
