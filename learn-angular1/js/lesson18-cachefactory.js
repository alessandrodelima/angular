var myapp = angular.module("myapp", [])
.factory('myCache', function ($cacheFactory) {
    return $cacheFactory('myCache', { capacity: 3 })
});
myapp.controller("CacheSampleController",
  function CacheSampleController($scope, myCache) {
    $scope.addToCache = function (key, value) {
      myCache.put(key, value);
    };
    $scope.readFromCache = function (key) {
      return myCache.get(key);
    };
    $scope.getCacheStatus = function () {
      return myCache.info();
    };
  });