function NavbarController($scope, $state, Auth){
  $scope.signedIn = Auth.isAuthenticated;

  $scope.logout = function(){
    Auth.logout().then(function(user){
      Materialize.toast('Goodbye!', 2000);
    });
  };

  Auth.currentUser().then(function(user) {
     $scope.user = user;
  });

  $scope.$on('devise:new-registration', function(e, user) {
    $scope.user = user;
  });

  $scope.$on('devise:login', function(e, user) {
    $scope.user = user;
  });

  $scope.$on('devise:logout', function(e, user) {
    $scope.user = {};
  });
};

angular
  .module('app')
  .controller('NavbarController', ['$scope', '$state', 'Auth', NavbarController]);
