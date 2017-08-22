// var app = angular.module('draftApp');
//
// app.factory('playerService', function($http) {
//
//   var playerNames = {};
//
//   return {
//     searchPlayers: function(searchName) {
//       var promise = $http({
//         method: 'GET',
//         url: 'http:http://api.fantasy.nfl.com/league/players'
//       }).then(function successfulCallback(response) {
//         console.log(response);
//         var playerNames = response;
//       }, function errorCallback(error) {
//         console.log('The API call failed.');
//       });
//
//       return promise;
//     },
//     returnNames: function() {
//       return playerNames;
//     }
//   }
// });
