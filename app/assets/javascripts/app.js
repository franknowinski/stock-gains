angular
  .module('app', ['ui.router', 'templates', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      })
      .state('home.login', {
        url: 'login',
        templateUrl: 'auth/login.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth){
          Auth.currentUser().then(function(){
            $state.go('home');
          });
        }]
      })
      .state('home.register', {
        url: 'register',
        templateUrl: 'auth/register.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth){
          Auth.currentUser().then(function(){
            $state.go('home');
          });
        }]
      })
      .state('home.stocks', {
        url: 'stocks',
        templateUrl: 'stocks/stocks.html',
        controller: 'StocksController as stocks'
      })
      .state('home.portfolio', {
        url: 'portfolio',
        templateUrl: 'portfolio/portfolio.html',
        controller: 'PortfolioController as portfolio'
      });

      $urlRouterProvider.otherwise('/');
    });
