
dashboard.service('khan',function(){    
var addproduct;
var courseName;
var courseid;    
var chaptercontroller_data;   
});




dashboard.controller('appcontroller', function($scope,khan,$rootScope,$http){
$http.get('/confirm').then(function(res){
console.log(res);                                             
$rootScope.songName = res.data.songName;
console.log($rootScope.songName);
khan.addproduct=$rootScope.songName;
});
});


dashboard.controller('coursecontroller', function($scope,khan,$rootScope,$http){
$http.get('/getUserCourse/dashboard/').then(function(respo){
console.log("hello" + respo.data.coursename); 
$rootScope.courseid = respo.data.courseid;    
$rootScope.coursename = respo.data.coursename;
$rootScope.courseimage = respo.data.courseimage;
$rootScope.course_description = respo.data.course_description;
khan.courseName = respo.data.coursename;
khan.courseid =respo.data.courseid;    
console.log("world"+khan.addproduct.email);
$rootScope.display = khan.addproduct.email;  

});
});


dashboard.controller('chaptercontroller',function($scope,khan,$rootScope,$http){
console.log("india");
var teamList=[];
$http.get('/getuserchapter/dashboard').then(function(res1){
console.log("Angular response"+JSON.stringify(res1));
$rootScope.cname = khan.courseName;  
$rootScope.sanjeevini = res1.data;
console.log($rootScope.sanjeevini)  ;
},function(error){
console.log("eror" + error);
});
});


dashboard.controller('videocontroller',function($scope,khan,$rootScope,$http,$routeParams){
console.log("helo");
console.log("in video controller "+ $routeParams.videocode);
$scope.videotoken = $routeParams.videocode;
$scope.courseid = khan.courseid;    
var jsondata ={var1:$scope.videotoken,var2:$scope.courseid};    
$http.post('/videocontent/dashboard',jsondata).then(function(data) {
$rootScope.videodata = data.data;  
console.log("hellohello" + $rootScope.videodata.nexturl);    
khan.chaptercontroller_data = data.data;    
$rootScope.cname = khan.courseName;   
console.log("nag" + $rootScope.cname);     
console.log("sanju" + JSON.stringify(data));
console.log("posted successfully");
}
);
});



dashboard.controller('chapterviewmorecontroller',function($scope,khan,$rootScope){
$rootScope.cname = khan.courseName;
$rootScope.chapterdata = khan.chaptercontroller_data;    
});



dashboard.controller('examcontroller', function($scope,khan,$rootScope,$http){
console.log("in exam controller");
$http.get('/getuserexams/dashboard/').then(function(res2){
console.log(" in exam controller " + JSON.stringify(res2)); 
    $rootScope.data=res2.data;
});    
});


dashboard.controller('settingscontroller', function($scope,$rootScope,$http){
console.log("Inside settings controller")    ;
  // var jsondata;
    $scope.execute = function(){
        console.log(" In function");
        var  jsondata = {var1: $scope.old,var2: $scope.newp};
        $http.post('/settingschangepassword',jsondata).then(function(){
      //need to add code for rendering the page based on the response
  })  ;
    }
});

dashboard.controller('testcontroller',function($scope,khan,$rootScope,$http,$routeParams){
//console.log("helo");
//console.log("in video controller "+ $routeParams.videocode);
$scope.testtoken = $routeParams.testcode;
//$scope.courseid = khan.courseid;  
var jsondata ={var1:$scope.testtoken};  
        //console.log("world" + jsondata);

$http.post('/examcontent/test',jsondata).then(function(data) {
$rootScope.videodata = data.data;  
console.log("hellohello" + $rootScope.videodata);    
khan.chaptercontroller_data = data.data;    
$rootScope.cname = khan.courseName;   
console.log("nag" + $rootScope.cname);     
console.log("sanju" + JSON.stringify(data));
console.log("posted successfully");
}
);
});
