app.controller('HomeCtrl',['$scope','$http','$routeParams','$rootScope', function($scope,$http,$routeParams,$rootScope){
		$scope.music = [
			{name:'Salsa',image:'',video:'',number:1},
			{name:'Bachata',image:'',video:'',number: 2},
			{name:'Mambo',image:'',video:'',number: 3},
			{name:'ChaCha',image:'',video:'',number:4},
			{name:'Salsa Styling',image:'',video:'',number:5}
		];

		$http.get('/twitter/hello')
			.success(function(users){
			$scope.users = users;
		});


	}]);
