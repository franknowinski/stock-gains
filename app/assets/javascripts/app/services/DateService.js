function DateService($filter) {
  this.formatDate = function(date){
    return $filter('date')(date,'yyyy-MM-dd');
  };
};

angular
  .module('app')
  .service('DateService', ['$filter', DateService]);
