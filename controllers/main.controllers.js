'use strict';

angular.module('nuvi')
/**
* controller to call API and behavior
* CRUD - facade pattern to call API
* endpointURL - url for calling the feeds
*/
.controller('mainCtrl', function($scope, CRUD, endpointURL){

	//init
	$scope.entry = false;
	
	//calling the CRUD service
	CRUD.getMethod(endpointURL).then( function(data) {
		$scope.endpoints = data;
	});
	
});