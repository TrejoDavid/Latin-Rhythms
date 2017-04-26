app.controller("LoginCtrl",['$scope','$http', '$rootScope', '$location',function($scope,$http $rootScope,$location){
	$scope.login = function(user){
		// console.log(user);
		$http.post('/login',user)
			.success(function(response){
				// console.log(response);
				$rootScope.currentUser = response;
				$location.url("/profile");
			});
	};
}]);