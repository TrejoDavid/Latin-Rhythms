app.controller("ProfileCtrl",function($scope,$http){
	$http.get("profile/user")
	.success(function(users){
		$scope.users = users;
	});

  $scope.classes = [
    {date: 'May 1 - May 30', info: [{name: 'Bachata 2', link: 'bachata2'}], teacher: 'Rey Sanchez'},
    {date: 'April 1 - April 30', info: [{name: 'Salsa 1', link: 'salsa1'}], teacher: 'Rey Sanchez'},
    {date: 'March 1 - March 30', info: [{name: 'Bachata 1', link: 'bachata1'}], teacher: 'Rey Sanchez'}
  ];


});


