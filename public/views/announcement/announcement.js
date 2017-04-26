app.controller("AnnouncementCtrl",['$scope','$http','$routeParams',function($scope,$http,$routeParams){

	$http.get("/announcement/test")
		.success(function(ok){
		 $scope.posts = ok;
	});

var refresh = function(){
		$http.get("/announcement/test")
		.success(function(ok){
		 $scope.posts = ok;
		});

	};


	$scope.announcement = {
			title: '',
			description: ''
		}

	// Add Announcement
	$scope.post = function(announcement){

		if($scope.announcement.title && $scope.announcement.description){
				$http.post('/announcement/test', announcement)
					.success(function(response){
						$scope.success = "Submitted";
						console.log('hello');
						refresh();
					});
			}

		// if($scope.announcement.title === ""){
		// 	return console.log("Please Enter a Title");

		// }  

		// if ($scope.announcemnt.description === ""){
		// 	return console.log("Please Enter a Description");
		// } 

	}

	// Delete Announcement
	$scope.delete = function(id){
		$http.delete('/announcement/test/' + id).success(function(response){
			refresh();
		});
	};

	// View Announcement 

	var test = $routeParams.test;

	$http.get('/announcement/view/' + test).success(function(response){
		$scope.viewpost = response;
	});


	// $scope.view = function(id){
	// 	$http.get('/announcement/view/' + id).success(function(response){
	// 		$scope.viewpost = response;
	// 	});
	// };


	$scope.update = function(id){
		$http.put('/announcement/update/' + id).success(function(response){
			$location.url("/announcement");
		});
	};


}]);



// app.controller("AnnouncementCtrl",['$scope','$http','$rootScope','$location',function($scope,$http,$rootScope,$location){

// 	$scope.register = function(user){
// 		if(user.password){
// 			$http.post('/register', user)
// 			.success(function(user){
// 				console.log(user)

// 			});	
// 		} 
// 	};

// }]);