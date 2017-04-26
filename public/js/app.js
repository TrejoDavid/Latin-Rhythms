var app = angular.module("latinRhythmsApp",["ngRoute","ngSanitize"]);

app.config(function($routeProvider){
	$routeProvider
		.when('/home',{
			templateUrl: 'views/home/home.html',
			controller: 'HomeCtrl'
		})
		.when('/login',{
			templateUrl: 'views/login/login.html',
			controller: 'LoginCtrl'
		})
		.when('/profile',{
			templateUrl: 'views/profile/profile.html',
			controller: 'ProfileCtrl',
			resolve: {
				logincheck: checkLoggedin
			}
		})
		.when('/registration',{
			templateUrl: 'views/registration/registration.html',
			controller: 'RegistrationCtrl'
		})
		.when('/social',{
			templateUrl: 'views/social/social.html',
			controller: 'SocialCtrl'
		})		
		.when('/announcement',{
			templateUrl: 'views/announcement/announcement.html',
			controller: 'AnnouncementCtrl'
		})		
		.when('/announcement/view/:test',{
			templateUrl: 'views/announcement/view.html',
			controller: 'AnnouncementCtrl'
		})
		.when('/create-social',{
			templateUrl: 'views/adminpanel/CreateSocial/createsocial.html',
			controller: 'CreateSocialCtrl'
		})		
		.when('/create-social/:social',{
			templateUrl: 'views/adminpanel/CreateSocial/socialview.html',
			controller: 'CreateSocialCtrl'
		})
		.when('/create-class',{
			templateUrl: 'views/adminpanel/CreateClass/createclass.html',
			controller: "CreateClassCtrl"
		})		
		.when('/create-class/:classview',{
			templateUrl: 'views/adminpanel/CreateClass/classview.html',
			controller: "CreateClassCtrl"
		})
		.when('/edit-user',{
			templateUrl: 'views/adminpanel/EditUser/edit-user.html',
			controller: 'EditUserCtrl'
		})
		.when('/edit-user/user/:user',{
			templateUrl: 'views/adminpanel/EditUser/edit-user-view.html',
			controller: 'EditUserCtrl'
		})
		.when('/class-view',{
			templateUrl: 'views/classview/classview.html',
			controller: 'ClassViewCtrl'
		})
		.when('/class-schedule',{
			templateUrl: 'views/ClassSchedule/class-schedule.html',
			controller: 'ClassScheduleCtrl'
		})
		.when('/classroom/:classId',{
			templateUrl: 'views/Class/class.html',
			controller: 'ClassCtrl'
		})
		.when('/classroom/:classId/comments/:username',{
			templateUrl: 'views/Class/class.html',
			controller: 'ClassCtrl'
		})			
		.when('/twitter',{
			templateUrl: 'views/Twitter/twitter.html',
			controller: 'TwitterCtrl'
		})
	  .when('/Salsa', {
        templateUrl: 'views/ClassInfo/salsa.html'
      })      
      .when('/Bachata', {
        templateUrl: 'views/ClassInfo/bachata.html'
      })      
      .when('/Mambo', {
        templateUrl: 'views/ClassInfo/mambo.html'
      })      
      .when('/ChaCha', {
        templateUrl: 'views/ClassInfo/chacha.html'
      })      
      .when('/Salsa Styling', {
        templateUrl: 'views/ClassInfo/salsa-styling.html'
      })
		.otherwise({
			redirectTo: '/home'
		})
});



var checkLoggedin = function($q,$timeout,$http,$location,$rootScope){
	var deferred = $q.defer();

	$http.get('/loggedin').success(function(user){

		$rootScope.errorMessage = null;

		if(user !== '0'){
			$rootScope.currentUser = user;
			deferred.resolve();
		}
		else {
			$rootScope.errorMessage = 'You need to log in';
			deferred.reject();
			$location.url('/login');
		}
	});
	return deferred.promise;
};


app.controller("NavCtrl", function($rootScope,$scope,$http,$location){
	$scope.logout = function(){
		$http.post('/logout')
		.success(function(){
			$rootScope.currentUser = null;
			$location.url("/home");
		});
	};
});