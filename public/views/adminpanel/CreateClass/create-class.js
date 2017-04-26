app.controller('CreateClassCtrl', ['$scope','$http','$sce', '$routeParams','$window',function($scope,$http,$sce,$routeParams,$window){

	$http.get('/create-class/view')
		.success(function(response){
			$scope.views = response;
		});
	
	$scope.submit = function(classes){
		$http.post('/create-class/create', classes)
			.success(function(classes){
				console.log('Class Created');
			});
	};

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl("videos/" + src + ".mp4");
  };



	var classview = $routeParams.classview;

	$http.get('/create-class/view/' + classview).success(function(response){
		$scope.classview = response;
	});


	$scope.delete = function(id){
		$http.delete('/create-class/class/' + id).success(function(response){
			// refresh();
			$window.location.assign('#/create-class');
			console.log(id + 'is deleted');
		});
	};


}]);

