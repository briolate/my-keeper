var app = angular.module('draftApp');

app.service("rankingsService", function($http) {

  this.getAllPlayers = function() {
    return $http.get('/rankings').then(function(response) {
      console.log(response.data);
      return response.data;
    });
  };

  this.addPlayer = function(player) {
    return $http.post('/rankings', player).then(function(response) {
      console.log(player);
      return response.data;
    });
  };

  this.deletePlayer = function(playerId) {
    return $http.delete('/rankings/' + playerId).then(function(response) {
      return response.data;
    });
  };

  this.editRanking = function(playerId) {
    return $http.put('/rankings/' + playerId).then(function(response) {
      return response.data;
    });
  };
});
