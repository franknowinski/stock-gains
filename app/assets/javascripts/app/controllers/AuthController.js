function AuthController($scope, $state, Auth){
  $scope.login = function(){
    Auth.login(this.user).then(function(user){
      Materialize.toast('Welcome!', 2000);
      $state.go('home');
    }, function(error){
      $scope.error = error.data.error;
    });
  };

  $scope.register = function(){
    Auth.register($scope.user ).then(function(user){
      Materialize.toast('Welcome!', 2000);
      $state.go('home');
    }, function(error){
      if (error.data.errors.email){
        $scope.error = 'Email ' + error.data.errors.email;
      } else {
        $scope.error = 'Password ' + error.data.errors.password;
      }
    });
  };
};
angular
  .module('app')
  .controller('AuthController', AuthController);
