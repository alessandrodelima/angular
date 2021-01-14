const lesson11 = angular.module('lesson11',[]);
lesson11.controller("x", function ($scope) {
  $scope.div = ['div1', 'div2', 'div3'];
  $scope.selectedDiv = $scope.div[0];
});