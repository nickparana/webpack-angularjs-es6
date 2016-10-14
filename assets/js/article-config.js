(function(){
angular
    .module('ApiNYT') 
    .config(function($routeProvider, $locationProvider) {

	$routeProvider
		 .when('/home', {
			templateUrl : 'pages/home.html',
			controller 	: 'ArticleController',
            controllerAs : 'vm'
		})
		.when('/about', {
			templateUrl : 'pages/acerca.html',
			controller 	: 'aboutController'
		})
		.when('/contact', {
			templateUrl : 'pages/contacto.html',
			controller 	: 'contactController'
		})
        .when('/text', {
			templateUrl : 'pages/compare.html',
			controller 	: 'TextController',
            controllerAs : 'vm'
		})       
		.otherwise({
			redirectTo: '/home'
		});
	
    $locationProvider.html5Mode(true);   
	
	});
})();