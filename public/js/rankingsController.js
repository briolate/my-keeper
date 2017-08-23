var app = angular.module('draftApp');

app.controller("rankingsController", function($scope, rankingsService) {

  $scope.formItem = {};

    // Load the player data on page load.
    rankingsService.getAllPlayers().then(function(players) {
        $scope.players = players;
    });

    // Function on scope called when form is submitted.
    $scope.addPlayer = function(player) {
        rankingsService.addPlayer(player).then(function() {
            // Clear the form.
            $scope.formItem = {};
            // Update the list with the new set of players.
            rankingsService.getAllPlayers().then(function(players) {
                $scope.players = players;
            });
        });
    };

    // Function on scope called when clicking Delete for a player.
    $scope.deletePlayer = function(player) {
        rankingsService.deletePlayer(player.id).then(function() {
            // Update the list with the new set of items.
            rankingsService.getAllPlayers().then(function(players) {
                $scope.players = players;
            });
        });
    };
});
