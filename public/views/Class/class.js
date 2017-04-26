app.controller('ClassCtrl',['$scope','$http','$routeParams', '$rootScope',function($scope, $http,$routeParams,$rootScope){

// Setting up Tabs for sections Classroom,Music request, and Email.//
  $scope.tab = 1;

  $scope.selectTab = function(setTab) {
    $scope.tab = setTab;
  }
  $scope.isSelected = function(checkTab) {
    return $scope.tab === checkTab;
  } 

  // Initialize Classroom ID from Angular params
  var classID = $routeParams.classId;
  var currentUser = $rootScope.currentUser.username;


// Populate Classroom information to the client.
  $http.get('classroom/' + classID).success(function(classroomid){
    $scope.classroom = classroomid;
  }); 
  
  // Submit Comment to the pertaining class
  $scope.addComment = function(comment){
      // Below is the syntax to submit comment in memory method
      // $scope.usercomments.push({user: 'User Test' , comment: $scope.comment});
      $http.post('classroom/'+ classID +'/comments/' + currentUser,comment)
      .success(function(response){
        console.log('Your comment has been submitted to the discussion' + response);
      });
  }
//Classroom Discussion Section END//




// Music Submittion Section START//
  $scope.tracks = [
    {name: 'Over', artist: 'Drake', link: 'http://www.youtube.com/'},
    {name: 'Over', artist: 'Drake', link: 'http://www.youtube.com/'},
    {name: 'Over', artist: 'Drake', link: 'http://www.youtube.com/'},
    {name: 'Over', artist: 'Drake', link: 'http://www.youtube.com/'},
    {name: 'Over', artist: 'Drake', link: 'http://www.youtube.com/'}
  ]


 $scope.deleteTrack = function(index){
    $scope.tracks.splice(index,1);
 };
  
  $scope.addTrack = function(){
    if(!$scope.artist || $scope.artist === '') return alert('Please Enter Artist');
    $scope.tracks.push({artist: $scope.artist, name : $scope.track, link: $scope.youtube});
    
    $scope.artist = '';
    $scope.track = '';
    $scope.youtube = '';
    
  };
  
// Music Submittion Section END//


// E-mail Instructor Section START //

  // Submit Email to Instructor
  $scope.submit = function(email){
    console.log('Submit Hit')
    $http.post('/classroom/email',email)
      .success(function(email){
        console.log('Message sent');
      });
  };
// E-mail Instructor Section END //



}]);