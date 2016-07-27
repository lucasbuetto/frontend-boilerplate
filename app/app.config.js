angular
    .module('app', [
        'ngRoute',
        'ngAnimate'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', {
                title: "Home",
                templateUrl: 'views/home.html'
            }).
            when('/page1', {
                title: "Page 1",
                templateUrl: 'views/page1.html'
            }).
            when('/page2', {
                title: "Page 2",
                templateUrl: 'views/page2.html'
            }).
            otherwise({
                title: 'Página não encontrada',
                templateUrl: 'views/errors/404.html'
            });
            
    }]);
