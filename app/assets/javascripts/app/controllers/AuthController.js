function AuthController($scope, $state, Auth){
  function welcomeMessage(){
    $state.go('home');
    return Materialize.toast('Welcome!', 2000);
  };

  $scope.login = function(){
    Auth.login(this.user).then(function(user){
      welcomeMessage();
    }, function(error){
      $scope.error = error.data.error;
    });
  };

  $scope.register = function(){
    Auth.register($scope.user ).then(function(user){
      welcomeMessage();
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
  .controller('AuthController', ['$scope', '$state', 'Auth', AuthController]);
