function StockResource($resource){

  return $resource('/api/v1/stocks', {id: '@id'}, {
    query: {method: 'GET', isArray: true},
    create: {method: 'POST'},
    delete: {method: 'DELETE', isArray: true}
  });
}

angular
.module('app')
.factory('StockResource', StockResource);
