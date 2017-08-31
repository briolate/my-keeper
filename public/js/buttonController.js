var app = angular.module('draftApp');

app.controller('buttonController', function($scope) {
  $scope.isActive = false;

  $scope.toggleActive = function() {
    $scope.isActive = !$scope.isActive;
  };
});
