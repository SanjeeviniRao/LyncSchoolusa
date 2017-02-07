'use strict';
let express = require('express');
let router = express.Router();
let passport = require('passport');

let verify = require('./controllers/verify_user');
let fp = require('./controllers/forgotpassword');
let rp = require('./controllers/resetpassword');
let courses = require('./controllers/courses');
let subcourses = require('./controllers/subcourses');
let subcoursemain = require('./controllers/subcoursemain');

class Router {

   constructor(){
     this.router = router;
     this.init();

   }


  init(){

this.router.get('/', (request,response) => {
response.render('homesource');

    });
      
this.router.get('/login',(request,response) => {
   response.render('login'); 
});


this.router.get('/register',(request,response) => {
   response.render('register'); 
});      
      
this.router.get('/profile',(request,response) => {
   response.render('profile'); 
});   

this.router.get('/program',(request,response) => {
   response.render('programs'); 
});       
  
this.router.get('/about',(request,response) => {
   response.render('about'); 
});       
          
      
this.router.get('/thankyou',(request,response) => {
   response.render('thankyou'); 
});
      
      
this.router.get('/forgotpassword',(request,response) => {
    response.render('forgotpswd');
});      
 
this.router.get('/footerContact',(request,response) => {
   response.render('contact_thankyou'); 
});      
      
this.router.get('/verify', verify.verifyUser.bind(express));  
this.router.get('/forgotP',rp.reset.bind(express)); 
      
this.router.get('/contactus',(request,response) => {
    response.render('contact');
}) ;

this.router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
this.router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/login'
        }));

    // route for logging out
this.router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
  
 

this.router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
this.router.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/profile',
                    failureRedirect : '/login'
            }));
      
 /* added routes for courses  dynamic */     
this.router.get('/courses', (req, res) => {
            courses.getCoursesList().then(function(ele) {
                // for(var t =0; t<ele.length; t++){
                //console.log(" In curses route" +  ele[t].id  + " " + ele[t].coursename + "" );
                //}
                res.render('courseslist', { coursedata: ele });
            }).catch(function(err) {
                console.log("In courses route" + err);

            });
        });

      
this.router.get('/:name', (req, res) => {
            var raw_url = req.url.toString();
         var  new_url =  raw_url.replace('/','');
           subcourses.getCoursesList(new_url).then(function(ele1) {
                for (var t = 0; t < ele1.length; t++) {
                    console.log(" In curses1 route" + ele1[t].subcourseid + " " + ele1[t].subcoursename + "");
                }

                res.render('subcourses', { subcoursedata: ele1 });


            }).catch(function(err) {
                console.log("In courses route" + err);

            });
           // res.render('balaji');
        });


        this.router.get('/training/:name1', (req,res)=>{

            var raw_url = req.url.toString().split("/");
            var new_url = raw_url[2];
            console.log("here" +  new_url);
      //  console.log("sanju" +  req.url);
            subcoursemain.getModuleContent(new_url).then(function(ele2) {
              console.log(" In curses2 route" + ele2[0].title + " " + ele2[0].description + "" + ele2[0].modules.length);
               res.render('coursedetails', { maincoursedata: ele2 });
          });

                        });      
      
      
     /* added routes for courses  dynamic */ 
      
      
      
      

 
  }
}


module.exports = Router;
