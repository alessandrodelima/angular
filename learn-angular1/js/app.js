var module = angular.module("sampleApp", ['ngRoute']);

module.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/route1', {
                    templateUrl: 'templates/page1.html',
                    controller: 'Route1Controller'
                }).
                when('/route2', {
                    templateUrl: 'templates/page2.html',
                    controller: 'Route2Controller'
                }).
                when('/route3', {
                    templateUrl: 'templates/mypage.html'

                }).
                otherwise({
                    redirectTo: '/route3'
                });
    }]);