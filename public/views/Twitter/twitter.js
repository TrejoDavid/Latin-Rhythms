app.controller('TwitterCtrl', ['$scope','$http','$routeParams','$rootScope', function($scope,$http,$routeParams,$rootScope){

	// Express routes are on folder routes/profile-route.js

		$http.get('/twitter/hello')
			.success(function(users){
			$scope.users = users;
		});

		$scope.onlineuser = $rootScope.currentUser;

		console.log($scope.onlineuser.username);


		


	// refresh();

	// var editUser = $routeParams.user;

	// $http.get('/edit-user/user/' + editUser).success(function(response){
	// 	$scope.userEdit = response;
	// });

	// $scope.delete = function(id){
	// 	$http.delete('/edit-user/user/' + id).success(function(response){
	// 		refresh();
	// 		console.log(id + 'is deleted');
	// 	});
	// };


}])