function StockResource($resource){
  return $resource('/api/v1/stocks', {userId:'@id'}, {
    get: {method: 'GET', isArray: true},
    create: {method: 'POST'},
    delete: {method: 'DELETE', isArray: true}
  });
};

angular
.module('app')
.factory('StockResource', StockResource);
