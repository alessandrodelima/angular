const lesson12 = angular.module('lesson12',[]);
lesson12.controller("x", function ($scope) {
  $scope.templatePages = [
    { temp: 'firstPage', url: 'directive_class.html' },  
    { temp: 'secondPage', url: 'directive_key.html' } 
  ];
  $scope.tempPage = $scope.templatePages[0];
  
});