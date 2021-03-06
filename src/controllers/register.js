'use strict';

let User = require('../models/user');
let nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');
let promise = require('promise');
let userName = 'lyncschoolusa@gmail.com';
let password = 'lyncschool123';
let transport = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
        host: 'smtp.gmail.com',
        port: 587,
        user: userName,
        pass: password
    }
}));



class SaveUser{
  
    
      registerUser(request,response,next){
       
        
        let firstname = request.body.Name;
        let lastname =  request.body.LastName;
        let email = request.body.Email;
        let password = request.body.password;
        let createdat = new Date();
        let hostname = request.get('host');  
        
          
          new SaveUser().regEntry(firstname,lastname,email,password,createdat,hostname).then(function(email){
              response.render('thankyou',{mailID:email});
          }).catch(function(err){
                console.log("In register.js " + err) ;
              response.render('/login');
          });
          

        }
    
    regEntry(firstname,lastname,email,password,createdat,hostname){
        return new Promise((resolve,reject) => {
            let new_user = new User({
                         firstname:firstname,
                          lastname: lastname,
                          email:email,
                          password : password,
                          verify_user: false,
                          provider: "local",
                          display_image: "",
                          gender:"",
                          about_me: "",
                          location:"",
                          createdat: createdat

                         }).save((error) =>{
                if(error){
                    console.log(error);
                    return reject(error);
                }else{
                   console.log("User has been saved successfully");
                   let link = "http://" + hostname + "/verify?id=" + email;
                   let mailOptions = {
                        from: userName,
                        to: email,
                        subject: "[Lync School]" + " " + " Please verify your email address.",
                        html: "Hello " +firstname+" "+lastname+".<br/>"+"Help us secure your Lync School account by verifying your email address ("+ email + ")." + " This lets you access all of Lync School features." +"<br/>" + "" + "<a href=" + link + ">Click here to verify </a>", 
			  
        }
                     //console.log(mailOptions);
                     transport.sendMail(mailOptions,  (error, response) => {
                           if (error) {
                                 console.log(error);
            
                             } else {
                                 return resolve(email);
              
            }
        });

                    
                    
                    
                    
                    
                    
                }
            })
        });
        
        
    } // end of regEntry

}


module.exports = new SaveUser();