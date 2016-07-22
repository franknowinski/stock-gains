function StockResource($resource){

  return $resource('/api/v1/stocks', {id: '@id'}, {
    create: {method: 'POST'},
    delete: {method: 'DELETE', isArray: true}
  });
}

angular
.module('app')
.factory('StockResource', StockResource);
