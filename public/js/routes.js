var app = angular.module('draftApp', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html'
  }).when('/draftOrder', {
    templateUrl: 'views/draftOrder.html'
  }).when('/myKeeper', {
    templateUrl: 'views/myKeeper.html'
  }).when('/rankings', {
    templateUrl: 'views/rankings.html'
  }).otherwise('/home');
});
