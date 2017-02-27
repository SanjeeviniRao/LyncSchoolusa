'use strict';
let User = require('../models/user');


class UserChangeP{
    
    changeUserPassword(request,response){
        
        let session_object = request.session.passport.user._id;
        console.log(" In UserChangeP" + session_object);
        
        let old_password = request.body.var1;
        console.log(" In UserChangeP" + old_password);
        let new_password = request.body.var2;
                console.log(" In UserChangeP" + new_password);
        var did = new require('mongodb').ObjectID(session_object);
        console.log("value" + did);
        
        User.findOne({
            _id: did, 
        }, ( err,obj) =>{
           if(obj){
               
               if(obj.password == old_password){
                   User.update({_id:did},{$set:{password:new_password}},(err1,obj1)=>{
                               if(obj1){
                                   console.log("password has been changed successfully");
                               }else{
                                   console.log(" In userchap" +  err1);
                               }
                               
                               
                               
                               
                               })
               }
               
           } else{
               console.log( " in userchap" + err);
           } 
        });
        
    }
    
    
}


module.exports = new UserChangeP();
