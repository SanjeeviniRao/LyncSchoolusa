'use strict';
let express = require('express');
let router = express.Router();
let passport = require('passport');
//var express = require('express');
//var bodyParser = require('body-parser'); // for reading POSTed form data into `req.body`
let expressSession = require('express-session');


let verify = require('./controllers/verify_user');
let fp = require('./controllers/forgotpassword');
let rp = require('./controllers/resetpassword');
let courses = require('./controllers/courses');
let subcourses = require('./controllers/subcourses');
let subcoursemain = require('./controllers/subcoursemain');
let userCourse = require('./controllers/usercourse');
let userchapter = require('./controllers/userchapter');
let uservideos = require('./controllers/uservideo');
let userExams = require('./controllers/userexams');
//let passportVariable=request.session.passport.user;

class Router {

   constructor(){
     this.router = router;
     this.init();

   }


  init(){
      
      this.router.get('/getuserexams/dashboard',userExams.getUserExams);
      
      this.router.post('/videocontent/dashboard', uservideos.getUserVideos);
//      this.router.post('/videocontent/dashboard',function(request,response){
//          console.log("in videocontent");
//          console.log("vidoecontent" +JSON.stringify(request.body.var1));
//      });
      
      this.router.post('/courses', (request, response) => {
            courses.getCoursesList().then(function(ele) {
                 for(var t =0; t<ele.length; t++){
                console.log(" In curses route" +  ele[t].id  + " " + ele[t].coursename + "" );
                }
                
	if(request.session.passport!=undefined)                  response.render('courseslist', { coursedata: ele, name: request.session.passport.user.firstname });
                else
                    response.render('courseslist',{coursedata:ele,name:""});
            }).catch(function(err) {
                console.log("In courses route" + err);

            });
        });
	  
	  
this.router.get('/getUserChapter/dashboard',userchapter.getUserChapters);
      
      
this.router.get('/getUserCourse/dashboard/',userCourse.getUserCourse)  ;    
      
this.router.get('/confirm', function(req, res) {
        var ex = {
            songName: req.session.passport.user
        }
        res.send(ex);
    }) ;

this.router.get('/', (request,response) => {
if(request.session.passport!=undefined)
	if(request.session.passport.user!=undefined)
   response.render('homesource.ejs',{ name: request.session.passport.user.firstname}); 
else
	response.render('homesource.ejs',{name:""});
else
	response.render('homesource.ejs',{name:""});
    });
      
//this.router.get('/login',(request,response) => {
//   response.render('login'); 
//});


//this.router.get('/register',(request,response) => {
//   response.render('register'); 
//});      
      
this.router.get('/profile',(request,response) => {
   response.render('profile'); 
});   

//this.router.get('/program',(request,response) => {
//	if(request.session.passport!=undefined)
//	if(request.session.passport.user!=undefined)
//   response.render('programs.ejs',{ name: request.session.passport.user.firstname}); 
//else
//	response.render('programs.ejs',{name:""});
//else
//	response.render('programs.ejs',{name:""});
//});       
  
//this.router.get('/about',(request,response) => {
//    if(request.session.passport!=undefined)
//	if(request.session.passport.user!=undefined)
//   response.render('about',{ name: request.session.passport.user.firstname}); 
//else
//	response.render('about',{name:""});
//else
//	response.render('about',{name:""});
//});       
//          
      
//this.router.get('/thankyou',(request,response) => {
//    if(request.session.passport!=undefined)
//	if(request.session.passport.user!=undefined)
//   response.render('thankyou',{ name: request.session.passport.user.firstname}); 
//else
//	response.render('about',{name:""});
//else
//	response.render('about',{name:""});
//});       
      
      
this.router.get('/forgotpassword',(request,response) => {
    response.render('forgotpswd');
});      
 
this.router.get('/footerContact',(request,response) => {
   response.render('contact_thankyou'); 
});      
      
this.router.get('/verify', verify.verifyUser.bind(express));  
this.router.get('/forgotP',rp.reset.bind(express)); 
      
this.router.get('/contactus',(request,response) => {
    response.render('contact',{ name: request.session.passport.user.firstname});
}) ;





this.router.get('/profileN',isLoggedIn,(request,response) => {
	console.log("User email from session"+request.session.passport.user.email);
	 response.render('homesource.ejs',{ name:request.session.passport.user.firstname}); 
});      









this.router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
this.router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profileN',
            failureRedirect : '/login'
        }));

    // route for logging out
this.router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
 
 this.router.get('/user',isLoggedIn,(request,response)=>{
	 var userObject=request.session.passport.user;
        response.render('dashboardsidenavres',{firstname:userObject.firstname,lastname:userObject.lastname,email:userObject.email});
    })  ;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
	else
		res.redirect('/login');
 console.log(sendStatus(401));
   //res.sendStatus(401);
}
 
 

this.router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
this.router.get('/auth/google/callback',
            passport.authenticate('google', {
                    //successRedirect : ['/profile',user:req.user.name],
					successRedirect : '/profileN',
                    failureRedirect : '/login'
            }));
      
 /* added routes for courses  dynamic */     
this.router.get('/courses', (request, response) => {
            courses.getCoursesList().then(function(ele) {
                // for(var t =0; t<ele.length; t++){
                //console.log(" In curses route" +  ele[t].id  + " " + ele[t].coursename + "" );
                //}
                
if(request.session.passport!=undefined)
                    response.render('courseslist', { coursedata: ele, name: request.session.passport.user.firstname });
                else
                    response.render('courseslist',{coursedata:ele,name:""});
            }).catch(function(err) {
                console.log("In courses route" + err);

            });
        });

    
this.router.get('/:name', (request, response) => {
            var raw_url = request.url.toString();
   // console.log(" hi" + raw_url);
    //console.log("query string" + request.query.name);
         var  new_url =  raw_url.replace('/','');
    //console.log(" in subcourses dynamci route");
    if(raw_url == "/favicon.ico") {response.render('homesource');}else{
    //console.log("in else loop");
           subcourses.getCoursesList(new_url).then(function(ele1) {
//                for (var t = 0; t < ele1.length; t++) {
//                    console.log(" In curses1 route" + ele1[t].subcourseid + " " + ele1[t].subcoursename + "");
//                }
               
if(request.session.passport!=undefined)
	//if(request.session.passport.user!=undefined)               
    response.render('subcourses', { subcoursedata: ele1,name: request.session.passport.user.firstname  });
               else
	response.render('subcourses',{ subcoursedata: ele1,name: ""  });



            }).catch(function(err) {
                console.log("In courses route" + err);

            });
        
    }
           // res.render('balaji');
        });
/*    this.router.get('/sahiti',(request,response)=>{
          console.log("sahiti") ;
		   response.render('login');
        });
*/

        this.router.get('/training/:name1', (request,response)=>{

            var raw_url = request.url.toString().split("/");
            var new_url = raw_url[2];
            console.log("here" +  new_url);
      //  console.log("sanju" +  req.url);
            subcoursemain.getModuleContent(new_url).then(function(ele2) {
                
                
//              console.log(" In curses2 route" + ele2[0].title + " " + ele2[0].description + "" + ele2[0].modules.length);
                
                if(request.session.passport!=undefined)
	if(request.session.passport.user!=undefined)      
response.render('coursedetails', { maincoursedata: ele2, name:request.session.passport.user.firstname });
                else
         response.render('coursedetails',{maincoursedata:ele2, name:""}) ;          
          });

                        });      
      
      
     /* added routes for courses  dynamic */ 
      
      

    
 
  }
}


module.exports = Router;
