app.controller('EditUserCtrl', ['$scope','$http','$routeParams', function($scope,$http,$routeParams){

	// Express routes are on folder routes/profile-route.js

	var refresh = function(){
	$http.get('/edit-user/user')
	.success(function(users){
		$scope.users = users;
	});
	
	}

	refresh();

	var editUser = $routeParams.user;

	$http.get('/edit-user/user/' + editUser).success(function(response){
		$scope.userEdit = response;
	});

	$scope.delete = function(id){
		$http.delete('/edit-user/user/' + id).success(function(response){
			refresh();
			console.log(id + 'is deleted');
		});
	};


}])