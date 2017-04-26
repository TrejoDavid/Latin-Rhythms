app.controller("SocialCtrl",['$scope','$http','$rootScope','$location', function($scope,$http,$rootScope,$location){

$scope.onlineuser = $rootScope.currentUser;


$http.get('/social-event/events')
.success(function(events){
  $scope.events = events;
});


  $scope.register = function(id,username){
    console.log(id);
    console.log(username);
    
    $http.post('/social-event/register/' + id + '/' + username)
      .success(function(response){
          console.log('User is registered' + response);
      });
  }

}]);