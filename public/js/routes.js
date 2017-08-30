var app = angular.module('draftApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html'
    }).state('draftOrder', {
      url: '/draftOrder',
      templateUrl: 'views/draftOrder.html'
    }).state('myKeeper', {
      url: '/myKeeper',
      templateUrl: 'views/myKeeper.html'
    }).state('rankings', {
      url: '/rankings',
      templateUrl: 'views/rankings.html'
    }).state('rankings.qb', {
      url: '/qb',
      templateUrl: 'views/rankings/qb.html'
    }).state('rankings.rb', {
      url: '/rb',
      templateUrl: 'views/rankings/rb.html'
    }).state('rankings.wr', {
      url: '/wr',
      templateUrl: 'views/rankings/wr.html'
    }).state('rankings.te', {
      url: '/te',
      templateUrl: 'views/rankings/te.html'
    }).state('rankings.dst', {
      url: '/dst',
      templateUrl: 'views/rankings/dst.html'
    }).state('rankings.k', {
      url: '/k',
      templateUrl: 'views/rankings/k.html'
    });
  $urlRouterProvider.otherwise('home');
});
