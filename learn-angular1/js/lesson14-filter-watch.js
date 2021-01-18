const lesson14 = angular.module('lesson14',[]);
lesson14.controller("x", function ($scope,$filter) {
  
  $scope.cars = [
    { carId: 001, carName: 'Santro' },
    { carId: 002, carName: 'Swift Dzire' },
    { carId: 003, carName: '120' },
    { carId: 004, carName: 'Verna' },
    { carId: 005, carName: 'City' }]; 
  
  $scope.cars2 = $scope.cars;
  $scope.$watch('search', function (val) {
    $scope.cars = $filter('filter')($scope.cars2, val);
  });
});