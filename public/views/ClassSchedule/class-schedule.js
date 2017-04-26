app.controller('ClassScheduleCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){

  $scope.tab = 1;

  $scope.selectTab = function(setTab) {
    $scope.tab = setTab;
  }
  $scope.isSelected = function(checkTab) {
    return $scope.tab === checkTab;
  } 

  $http.get('schedule/monday-schedule')
  	.success(function(response){
  		$scope.mondays = response;
  	});

  	$http.get('schedule/tuesday-schedule')
  		.success(function(response){
  			$scope.tuesdays = response;
  		});

  	$http.get('schedule/wednesday-schedule')
  		.success(function(response){
  			$scope.wednesdays = response;
  		});

  	$http.get('schedule/thursday-schedule')
  		.success(function(response){
  			$scope.thursdays = response;
  		});

  	$http.get('schedule/friday-schedule')
  		.success(function(response){
  			$scope.fridays = response;
  		});

  	$http.get('schedule/saturday-schedule')
  		.success(function(response){
  			$scope.saturdays = response;
  		});


    // $http.get('schedule/user/')
    //   .success(function(response){
    //     $scope.user = response;
    //   });

  $scope.onlineuser = $rootScope.currentUser;

  $scope.register = function(id,username){

    console.log(id);
    console.log(username);

    $http.post('/schedule/register/' + id + '/' + username)
      .success(function(response){
          console.log('User is registered' + response);
      });
  }

}]);
