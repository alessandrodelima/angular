const lesson10 = angular.module('lesson10',[]);
lesson10.controller("x", function ($scope) {
  $scope.initialname="Alessandro";
  $scope.initialemail="teste@teste.com";
  $scope.age = "55";
  $scope.pattern = /^\d*$/;
});