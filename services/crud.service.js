'use strict';

angular.module('nuvi')

.factory('CRUD', ['$q', '$http', function($q, $http) {
    return new function() {

        this.getMethod = function(url) {
            var deferred = $q.defer();

            $http.get(url).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject([data,status,headers,config]);
                });

            return deferred.promise;
        }

    };
}]);