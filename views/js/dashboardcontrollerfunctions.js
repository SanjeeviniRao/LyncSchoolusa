
dashboard.service('khan',function(){    
var addproduct;
    
    
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
$rootScope.coursename = respo.data.coursename;
$rootScope.courseimage = respo.data.courseimage;
$rootScope.course_description = respo.data.course_description;
console.log("world"+khan.addproduct.email);
$rootScope.display = khan.addproduct.email;  

});
});


dashboard.controller('chaptercontroller',function($scope,$rootScope,$http){
console.log("india");
$http.get('/getuserchapter/dashboard').then(function(res1){
console.log("helloworld" + res1.length);    
});
});
