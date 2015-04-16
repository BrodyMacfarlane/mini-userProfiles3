var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {
	var dfd = $q.defer();
	this.getUsers = function() {
	    $http({
	        method: 'GET',
	        url: 'http://reqr.es/api/users?page=1'
    }).then(function(response){
    	response = response.data.data
    	for(i = 0; i < response.length; i++){
    		response[i].first_name = 'Ralf'
    	}
    	dfd.resolve(response)
    })
  	return dfd.promise;
}
});