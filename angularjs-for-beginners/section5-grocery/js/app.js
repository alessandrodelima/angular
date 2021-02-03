var app = angular.module('groceryListApp', ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
        templateUrl: "views/groceryList.html",
        controller: "GroceryListItemsController"
    })
    .when("/addItem", {
      templateUrl: "views/additem.html",
      controller: "GroceryListItemsController"
    })
    // .when("/addItem/:id", {
    .when("/addItem/:id/:cat", {
      templateUrl: "views/additem.html",
      controller: "GroceryListItemsController"
    })
    .otherwise({
      redirectTo: "/"
    })
});

app.controller("HomeController", ["$scope", function ($scope) {
  $scope.appTitle = "Grocery List";
}]);

app.controller("GroceryListItemsController", ["$scope", "$routeParams", function ($scope, $routeParams) {
  $scope.groceryItems = [
    {completed: true, itemName: 'milk', date: '2014-10-01'},
    {completed: true, itemName: 'cookies', date: '2014-10-02'},
    {completed: true, itemName: 'ice cream', date: '2014-10-01'},
    {completed: true, itemName: 'potatoes', date: '2014-10-01'},
    {completed: true, itemName: 'cereal', date: '2014-10-01'},
    {completed: true, itemName: 'bread', date: '2014-10-01'},
    {completed: true, itemName: 'eggs', date: '2014-10-01'},
    {completed: true, itemName: 'tortillas', date: '2014-10-01'}
  ]

  $scope.rp = "Route Params Value: " + $routeParams.id + $routeParams.cat;

}]);


//http://127.0.0.1:5500/index.html#/addItem/100
//http://127.0.0.1:5500/index.html#/addItem/mushrooms/vegetable