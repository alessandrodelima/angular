const lesson13 = angular.module('lesson13',[]);
lesson13.controller("x", function ($scope) {
 
  $scope.cars = [
    'MERCEDES',
    'BMW',
    'AUDI'
  ];
  $scope.my = {
    favorite: 'AUDI'
  };  
});