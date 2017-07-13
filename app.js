angular.module('app', ['ui.router'])
  .config(function($urlRouterProvier, $stateProvider) {
    $stateProvider

      .state('dashboard', {
        templateUrl: './views/dashboard.html',
        url: '/dashboard'
      })
      .state('login', {
        templateUrl: './views/login.html',
        url: '/login',
        controller: 'mainCtrl'
      })
      .state('ticket', {
        templateUrl: './views/ticket.html',
        url: '/'
      })
      
  })
