'use strict';

angular.module('nuvi')
/**
* controller to call API and behavior
* CRUD - facade pattern to call API
*/
.controller('appCtrl', function($scope, CRUD){

	//init
	$scope.entry = false;
		
	//calling the CRUD service for table data
	CRUD.getMethod($scope.endpoints.data.endpoints.socialMediaData).then( function(data) {
		$scope.socialMediaData = data;
		$scope.entry = true;
	});
	
	//like button clicked
	$scope.goLike=function(el){
		alert("Like - calls social media API update : "+el+" LIKE");
	};
	
	//comment button clicked
	$scope.goComment=function(el){
		alert("Comment - calls social media API update : "+el +" COMMENT");
	};
	
});