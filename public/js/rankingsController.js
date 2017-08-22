var app = angular.module('draftApp');

app.controller("rankingsController", function($scope, rankingsService) {

  $scope.players = {};

  $scope.addPlayer = function(player) {
    player.name = $scope.name;
    player.ranking = $scope.ranking;
    rankingsService.addPlayer(player).then(function() {
      console.log($scope.players);
      $scope.submissionSuccess = true;
    });
    $scope.players = {};
  };
});
