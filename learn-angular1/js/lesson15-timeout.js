const lesson15 = angular.module('lesson15',[]);
lesson15.controller("x", function ($scope,$timeout) {
  
  $scope.mileSeconds = 0;
  let countUp = function () {
    $scope.mileSeconds += 1000;
    $timeout(countUp, 1000);
  }
  $timeout(countUp, 1000);
});