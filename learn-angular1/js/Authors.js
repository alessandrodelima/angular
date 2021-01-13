// <reference path="angular.js" />
let AuthorsApp = angular.module('AuthorsApp', []); 
AuthorsApp.controller("MyController", function($scope){
  $scope.authors = [
    {'name': 'Maruti Makwana'},
    {'name': 'Rahul Sharma'},
    {'name': 'Scott Stark'},
    {'name': 'Ram Makwana'}
  ]
});