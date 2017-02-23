'use strict';

let examUser = require('../models/exams');
let promise = require('promise');
let userstatus = require('../models/userstatus');
let chapterUser = require('../models/chapters');
 
class UserExams{

    
getUserExams(request,response){
    
    return new promise(function(resolve,reject){
    console.log(' In exams');
let courseid ; let chapterids= [];let data={};
userstatus.findOne({userid:request.session.passport.user._id}, (error,object)=>{
if(object) {
courseid = object.courseid;
chapterids = object.chapternumber;
    
    console.log(" outside  " + chapterids.length);
    return resolve(chapterids);
}else{
console.log("error"+ error);
}
}).then(function(){
    console.log( " om then fucntion");
//let oid = new require('mongodb').ObjectID(courseid);    
//chapterUser.findOne({_id:oid},())
    
    console.log(" length " + chapterids.length);
for( var i=0;i<chapterids.length;i++){
    console.log( " in for loop" + chapterids[i]);
    let rawid = chapterids[i];
    let newid = rawid.replace('"',"").replace('"',"");
    let oid = new require('mongodb').ObjectID(newid);    

    chapterUser.findOne({_id: oid}, (err,obj)=>{
                        if(obj){
        data.chapterheading = obj.chapterheading;
        console.log(" abc" + data.chapterheading);
        data.chaptersubhading = obj.chaptersubheading;
        console.log(" abc " + data.chaptersubhading );
    }
                        }).then(function(){
        examUser.findOne({chapterid:newid},(err1,obj1)=>{
                            if(obj1){
                                data.questions = obj1.test;
                                console.log(" in down loop" + obj1);
                                response.send(data);
                                
                                
                            }else{
                                console.log("err1"+ err1);
                            }
                        })                        
                                })
    
    
    
    
    
    
    
    
} 
    
    
    
    
    
    
    
    
    
    
})  ; 

    
    
    
    
    }); // end of promise
    
    
}
}

module.exports = new UserExams();