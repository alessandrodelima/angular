var mymodule= angular.module('app', ['ngCookies']);
mymodule.controller("x", function ($scope, $cookies) {
    $scope.initially = "maruti";
    $scope.setCookieValue = function () {
        $cookies.test = $scope.initially;
    }
    $scope.getCookieValue = function () {
        return $cookies.test;
    }
});