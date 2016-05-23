'use strict';

angular.module('nuvi', ['ui.router', 'ngSanitize', 'ui.bootstrap'])

  .value('endpointURL', 'assets/feeds/endpoints.json')

	.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	
		$urlRouterProvider.otherwise('/app');
		//$urlRouterProvider.when('/app', '/app/componentForce');
	
			$stateProvider
            
			.state('app', {
				url:'/app',
				controller:'appCtrl',
				templateUrl:'views/app.html'                            
       })
			// nested app with initial app controller
			/*.state('app.componentForce', {
				url:'/componentForce',				
				views: {
					'': {
						templateUrl: 'views/navigation/app-componentForce.html',
						controller:'ComponentForceCtrl',
						},
					'all@app.componentForce': { 
						templateUrl: 'views/navigation/app-componentForce-selectAll.html',
						controller:'ConfigurationForceCtrl',
					}				
        }
			})*/
			//
    }])
