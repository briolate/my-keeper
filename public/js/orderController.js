var app = angular.module('draftApp');

app.controller("orderController", function($scope) {
  // Member List Array
  $scope.members = [];

  // Add a Member to the list
  $scope.addMember = function() {
    $scope.members.push({
      name: $scope.member
    });
    // Clear input fields after push
    $scope.member = "";
  };
});
