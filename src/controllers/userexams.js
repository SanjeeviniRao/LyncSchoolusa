'use strict';

let examUser = require('../models/exams');
let promise = require('promise');
let userstatus = require('../models/userstatus');
let chapterUser = require('../models/chapters');
 
class UserExams{

    
getUserExams(request,response){
    
  //  return new promise(function(resolve,reject){
   // console.log(' In exams');
let courseid ; let chapterids= [];let data={}; let examelements =[];
userstatus.findOne({userid:request.session.passport.user._id}, (error,object)=>{
if(object) {
courseid = object.courseid;
chapterids = object.chapternumber;
    
   // console.log(" outside  " + chapterids.length);
   // return resolve(chapterids);
}else{
console.log("error"+ error);
}
}).then(function(){
   // console.log( " om then fucntion");
//let oid = new require('mongodb').ObjectID(courseid);   
//chapterUser.findOne({_id:oid},())
    let idObjectArray=[];
    let resultArray=[];
    
   for( var k=0;k<chapterids.length;k++){
    let rawid = chapterids[k];
       console.log(" In for loop" + rawid);
    let newid = rawid.replace('"',"").replace('"',"");
    let oid = new require('mongodb').ObjectID(newid); 
    let queryId={"_id":oid};
       idObjectArray.push(queryId);  
   }
    console.log(idObjectArray);
    
    
    
    chapterUser.aggregate([
  { "$match": { $or: idObjectArray }},
  { "$sort": { "chapterid": 1 } },
  { "$limit": 20 },
  { "$lookup": {
    "localField":"_id",
    "from": "exams",
    "foreignField": "chapterid",
    "as": "exam"
  } },
  { "$unwind": "$exam" },
  { "$project": {
    "chapterheading": 1,
    "chaptersubheading": 1,
    "chapterdescription":1,
    "exam._id": 1
      } }
]).exec(function(error,result){
        if(result)
        {
            console.log("Aggregate result :"+result);
        for(let i=0; i<result.length;i++){
            let dataDocument={};
           console.log("data" +JSON.stringify(result[i])); 
            dataDocument.examid=result[i].exam._id;
            dataDocument.chapterheading=result[i].chapterheading;
            dataDocument.chaptersubheading=result[i].chaptersubheading;
            dataDocument.chapterdescription=result[i].chapterdescription;
            resultArray.push(dataDocument);
           
        }
          console.log("dta1"+ resultArray);
            response.send(resultArray);
        }
        else
            console.log(error);
    });
    
    
    
    
   /* 
    var i=0;
  //  console.log(" length " + chapterids.length);
for( var k=0;k<chapterids.length;k++){
  //  console.log( " in for loop" + chapterids[i]);
    let rawid = chapterids[k];
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
                                i++;
        console.log("i value :"+i);
        console.log(" Exam elements length"+examelements.length)
        if(k==examelements.length){
    console.log("lync new"+examelements.length);
            response.send(examelements);      
                                
        }       }else{
                                console.log("err1"+ err1);
                            }
                       }) .then(function(){
        
   
    
    });                  
                            
                           
               
                            
                            
                            
    }else{
        console.log("err" + err);
    }
                     });
                              
                              //  })
    
    
   
    
   
    
    
} // end of for
    
 */   
 // resolve(examelements);
    
    
    
 //response.send(examelements);   
 //response.send(examelements);   
})  ; 
//}).then(function(examelements){
 //  console.log("lync new"+examelements.length); 
 //response.send(examelements);   
    
    
    //   response.send(examelements);
  
//});
    
    
    
    
//    }); // end of promise
    
    
}
}

module.exports = new UserExams();