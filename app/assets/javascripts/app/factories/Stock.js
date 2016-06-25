function Stock($resource){

  return $resource('/api/v1/stocks', {user_id: '@userId'}, {
    // query: {method: 'GET', isArray: true},
    // get: {method: 'GET', isArray: true},
    create: {method: 'POST'},
    delete: { method: 'DELETE' }
  });
}

angular
.module('app')
.factory('Stock', Stock);
