//<script src="dashboardcontrollerfunctions.js"></script>
var dashboard=angular.module('dashboard', ['ngRoute']);
dashboard.config(function($routeProvider) {
	$routeProvider

	.when("/dashboard",{
		templateUrl:"dashboard.html"
	})
	 .when("/dashboardapplication",{
		templateUrl:"dashboardapplication.html",
        controller: 'appcontroller'
        
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
		templateUrl:"dashboardcourseclick1.html",
        controller: 'coursecontroller'
	})
      .when("/dashboardcourseclick2",{
		templateUrl:"dashboardcourseclick2.html",
        controller: 'chaptercontroller'
	})
      .when("/dashboardcourseclick3",{
		templateUrl:"dashboardcourseclick3.html"
	})
      .when("/dashboardcourseclick4",{
		templateUrl:"dashboardcourseclick4.html",
        controller: 'chapterviewmorecontroller'
	})
      .when("/dashboardsettings",{
		templateUrl:"dashboardsettings.html",
        controller : 'settingscontroller'
	})
      .when("/dashboardexamclick1",{
		templateUrl:"dashboardexamclick1.html",
        controller: 'examcontroller'
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
    
    
    .when("/dashboardcourseclick3/vid/:videocode",{
        templateUrl:"dashboardcourseclick3.html",
        controller:'videocontroller'
    })
     .when("/dashboardtest/:examcode",{
        templateUrl:"dashboardtest.html",
        controller:'testcontroller'
    })
    
});

// dashboard.run(function ($rootScope, $http) {
//    $http.get('/confirm')
//        .then(function(res) {
//            console.log(res);
//            $rootScope.songName = res.data.songName;
//            console.log($rootScope.songName)
//        })
//})
 



//dashboard.controller('appcontroller', function($scope,$rootScope,$http){
//    $http.get('/confirm').then(function(res){console.log(res);
//                                             $rootScope.songName = res.data.songName;
//     console.log($rootScope.songName);
//                                            });
//});
//



// dashboard.run(function($rootScope, $http){
//     $http.get('/getUserCourse/sanjeevini/').then(function(respo){
//        console.log("hello" + respo.data.coursename); 
//         $rootScope.coursename = respo.data.coursename;
//         $rootScope.courseimage = respo.data.courseimage;
//         $rootScope.course_description = respo.data.course_description;
//         
//     });
// });
// 
 
