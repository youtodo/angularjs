angular.module('myApp')
    .config(function($stateProvider, $urlRouterProvider,$locationProvider){
		
		// For any unmatched url, send to /route1
		$urlRouterProvider.otherwise("/index.html")
		
		$stateProvider
			.state('task1', {
				url: "/task1",
				templateUrl: "./views/task1.template.html",
				controller: 'task1Controller'
			})
			.state('task2', {
				url: "/task2",
				templateUrl: "./views/task2.template.html",
				controller: 'task2Controller'
			})
			.state('task3', {
				url: "/task3",
				templateUrl: "./views/task3.template.html",
				controller: 'task3Controller'
			})
			$locationProvider.html5Mode(true);
	})