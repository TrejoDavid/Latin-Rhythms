app.controller('CreateSocialCtrl', ['$scope','$http','$routeParams', function($scope,$http,$routeParams){

	var refresh = function(){
	$http.get('/create-social/social')
		.success(function(socialevent){
			$scope.events = socialevent;
		});
	}

	refresh();


	$scope.post = function(social){

		$http.post('/create-social/social', social)
			.success(function(social){
				console.log('Creating Social Event');
			});

	};


	var social = $routeParams.social;

	$http.get('/create-social/view/' + social).success(function(response){
		$scope.viewsocial = response;
	});



}]);

