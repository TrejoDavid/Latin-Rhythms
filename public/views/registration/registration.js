app.controller("RegistrationCtrl",['$scope','$http','$rootScope','$location',function($scope,$http,$rootScope,$location){
	$scope.register = function(user){
		if(user.password === user.password2){
			$http.post('/registration/newuser', user)
			.success(function(user){
				$rootScope.currentUser = user;
				$location.url('/profile');
			});	

		   
		   	 
		

		} 
		// else if(user.password !== user.password2){
		// 	console.log('Passwords do not match');
		// }
	};
}]);



// app.controller("RegistrationCtrl",['$scope','$http','$rootScope',function($scope,$http, $rootScope){
// 	$scope.register = function(user){
// 		console.log('fire');

// 			$http.post('/register', {
//                 email: user.username,
//                 password: user.password
//             })
// 			.success(function(user){
// 				$rootScope.currentUser = user;

// 			});
// 	};
// }]);





        // methods.create = function(email, password, done) {
        //     $http.post('/auth/local/signup', {
        //         email: email,
        //         password: password
        //     }).then(function(res) {
        //         done();
        //     }, function(err) {
        //         done(err);
        //     });
        // };