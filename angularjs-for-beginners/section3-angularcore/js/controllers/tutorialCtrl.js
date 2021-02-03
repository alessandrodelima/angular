let myApp = angular.module("tutorialCtrlModule", []);
myApp.controller('TutorialCtrl',['$scope', "Calculations", function($scope, Calculations ) {
  $scope.tutorialObject = {};
  $scope.tutorialObject.title = "Main Page";
  $scope.tutorialObject.subTitle = "Sub title";
  $scope.tutorialObject.bindOutput = 2;  
  $scope.tutorialObject.firstname = "Alessandro";
  $scope.tutorialObject.lastname = "Lima";

  $scope.timesTwo = function() {
    // $scope.tutorialObject.bindOutput *= 2;
    $scope.tutorialObject.bindOutput = Calculations.timesTwo($scope.tutorialObject.bindOutput);
  }
  Calculations.pythagoreanTheorum();


}])
.directive("welcomeMessage", function () {
  return {
    restrict: "A",
    template: `
    <div> Howdy hoe are you? </div>
  `
  }
})

.factory("Calculations", function () {
  let calculations = {};
  calculations.timesTwo = function(a) {
    return a * 2;
  };
  calculations.pythagoreanTheorum = function(a, b) {
    return (a * b) + (b * b);
  }
  return calculations;
})

