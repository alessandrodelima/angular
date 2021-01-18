const lesson12 = angular.module('lesson12',[]);
lesson12.controller("x", function ($scope) {
  $scope.templatePages = [
    { temp: 'firstPage', url: 'lesson5.html' },  
    { temp: 'secondPage', url: 'lesson8.html' } 
  ];
  $scope.tempPage = $scope.templatePages[0];
  
});