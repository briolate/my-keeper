var app = angular.module('draftApp');

app.service("rankingsService", function($http) {

  this.addPlayer = function(player) {
    var promise = $http({
      url: '/rankings',
      method: 'POST',
      data: player
    })
    .then(function(response) {
      console.log('Success');
    },
    function(response) {
      console.log('Post failed');
    });
    return promise;
  }
});
