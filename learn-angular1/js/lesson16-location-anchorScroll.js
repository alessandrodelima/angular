const lesson16 = angular.module('lesson16',[]);
lesson16.controller("x", function ($scope, $location, $anchorScroll) {
  
  $scope.goDown = function () {
    $location.hash('down');
    $anchorScroll();
}
$scope.goUp = function () {
    $location.hash('up');
    $anchorScroll();
}
  
});