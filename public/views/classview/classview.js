app.controller('ClassViewCtrl',['$scope',function($scope){
  
  $scope.usercomments = [
    {user: 'David Trejo', comment: 'Hello Class, How is everyone doing?', picture:'http://www.lcfc.com/images/common/bg_player_profile_default_big.png'},
    {user: 'Instructor', comment: 'Hey David, I am doing well.', picture:'https://s-media-cache-ak0.pinimg.com/236x/48/cc/d6/48ccd6e3d8bb87e880546643ce458976.jpg'},

  ];
  
  
  $scope.addComment = function(){
      $scope.usercomments.push({user: 'User Test' , comment: $scope.comment});
      $scope.comment = '';
  }
  
  
  $scope.tracks = [
    {name: 'Over', artist: 'Drake', link: 'http://www.youtube.com/'},
    {name: 'Over', artist: 'Drake', link: 'http://www.youtube.com/'},
    {name: 'Over', artist: 'Drake', link: 'http://www.youtube.com/'},
    {name: 'Over', artist: 'Drake', link: 'http://www.youtube.com/'},
    {name: 'Over', artist: 'Drake', link: 'http://www.youtube.com/'}
  ];
  
  
}]);