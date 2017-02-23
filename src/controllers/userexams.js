'use strict';

let examUser = require('../models/exams');
let promise = require('promise');
let userstatus = require('../models/userstatus');
let chapterUser = require('../models/chapters');
 
class UserExams{

    
getUserExams(request,response){
    
    return new promise(function(resolve,reject){
   // console.log(' In exams');
let courseid ; let chapterids= [];let data={}; let examelements =[];
userstatus.findOne({userid:request.session.passport.user._id}, (error,object)=>{
if(object) {
courseid = object.courseid;
chapterids = object.chapternumber;
    
   // console.log(" outside  " + chapterids.length);
    return resolve(chapterids);
}else{
console.log("error"+ error);
}
}).then(function(){
   // console.log( " om then fucntion");
//let oid = new require('mongodb').ObjectID(courseid);    
//chapterUser.findOne({_id:oid},())
    
  //  console.log(" length " + chapterids.length);
for( var i=0;i<chapterids.length;i++){
  //  console.log( " in for loop" + chapterids[i]);
    let rawid = chapterids[i];
    let newid = rawid.replace('"',"").replace('"',"");
    let oid = new require('mongodb').ObjectID(newid);    

    chapterUser.findOne({_id: oid}, (err,obj)=>{
                        if(obj){
        data.chapterheading = obj.chapterheading;
        data.chaptersubhading = obj.chaptersubheading;
          examUser.findOne({chapterid:newid},(err1,obj1)=>{
                            if(obj1){
                                data.examid = obj1._id;
                                data.questions = obj1.test;
                               // response.send(data);
                         console.log(" abc" + data.chapterheading);
                        console.log(" abc " + data.chaptersubhading );
                                     console.log(" abc" + data.examid);
           console.log("abc" + data.questions);
     examelements.push({chapterheading: data.chapterheading, chaptersubheading: data.chaptersubhading, examid:data.examid, questions: data.questions });                               
                                
                            }else{
                                console.log("err1"+ err1);
                            }
                        })                    
                            
                            
               
                            
                            
                            
    }else{
        console.log("err" + err);
    }
                        })
                              
                              //  })
    
    
    
   
    
    
    
    
} // end of for
    
    
 //  console.log("lync"+examelements.length); 
 //response.send(examelements);   
    
    
       response.send(examelements);
 
    
    
    
//})  ; 
});
    
    
    
    
    }); // end of promise
    
    
}
}

module.exports = new UserExams();