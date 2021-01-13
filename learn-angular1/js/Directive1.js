let Directive1 = angular.module('Directive1', []); 
Directive1.controller("x", function ($scope){
 $scope.clickCounter = 0;
 $scope.check = function () {
   $scope.clickCounter++;
 }
});