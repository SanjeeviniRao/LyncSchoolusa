var dashboard=angular.module('dashboard', ['ngRoute']);
dashboard.config(function($routeProvider) {
	$routeProvider

	.when("/dashboard",{
		templateUrl:"dashboard.html"
	})
	 .when("/dashboardapplication",{
		templateUrl:"dashboardapplication.html"
        
	})
	.when("/dashboardios2",{
		templateUrl:"dashboardios2.html"
	})
    .when("/dashboardtest1",{
		templateUrl:"dashboardtest1.html"
	})
	.when("/dashboardasg1",{
		templateUrl:"dashboardasg1.html"
	})
	.when("/dashboardprofile",{
		templateUrl:"dashboardprofile.html"
	})
     .when("/dashboardasgmnt",{
		templateUrl:"dashboardasgmnt.html"
	})
     .when("/dashboardasgmntclick2",{
		templateUrl:"dashboardasgmntclick2.html"
	})
     .when("/dashboardasgmntclick1",{
		templateUrl:"dashboardasgmntclick1.html"
	})
     .when("/dashboardasgmntover",{
		templateUrl:"dashboardasgmntover.html"
	})
     .when("/dashboardfeedback1",{
		templateUrl:"dashboardfeedback1.html"
	})
     .when("/dashboardfeedback",{
		templateUrl:"dashboardfeedback.html"
	})
     .when("/dashboardasgmntclick3",{
		templateUrl:"dashboardasgmntclick3.html"
	})
      .when("/dashboardcourseclick1",{
		templateUrl:"dashboardcourseclick1.html"
	})
      .when("/dashboardcourseclick2",{
		templateUrl:"dashboardcourseclick2.html"
	})
      .when("/dashboardcourseclick3",{
		templateUrl:"dashboardcourseclick3.html"
	})
      .when("/dashboardcourseclick4",{
		templateUrl:"dashboardcourseclick4.html"
	})
      .when("/dashboardsettings",{
		templateUrl:"dashboardsettings.html"
	})
      .when("/dashboardexamclick1",{
		templateUrl:"dashboardexamclick1.html"
	})
       .when("/dashboardtest",{
		templateUrl:"dashboardtest.html"
	})
       .when("/dashboardexamover",{
		templateUrl:"dashboardexamover.html"
	})
        .when("/dashboardprofileedit",{
		templateUrl:"dashboardprofileedit.html"
	})
         .when("/dashboardexamover",{
		templateUrl:"dashboardexamover.html"
	})
         .when("/dashboardexamsubmit",{
		templateUrl:"dashboardexamsubmit.html"
	})

         .when("/dashboardnotification",{
		templateUrl:"dashboardnotification.html"
	})
});

 dashboard.run(function ($rootScope, $http) {
    $http.get('/confirm')
        .then(function(res) {
            console.log(res);
            $rootScope.songName = res.data.songName;
            console.log($rootScope.songName)
        })
})