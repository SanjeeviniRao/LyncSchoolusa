'use strict';
let  express = require('express');
let userExams = require('../models/exams');

let promise = require('promise');




class UserChapterExams{
   
    
    getChapterTests(request,response,next){
        var data ={}; var elements=[];
       // console.log("In videos");
        var userid= request.session.passport.user._id;
        var exam_token = JSON.stringify(request.body.var1);
        
        
        userExams.findOne({_id:exam_token},(err,object)=>{
            if(object){
               elements.push(object.test); 
                response.send(elements);
            }
            else{
                console.log(err);
            }
        });
        
     /*   var courseid = JSON.stringify(request.body.var2);
        var courseid_final = courseid.replace('"',"").replace('"',"");
        console.log("sahiti" +  courseid);
        //console.log("sanju"+ video_token);
        var video_token_final = video_token.replace('"',"").replace('"',"");
        //console.log(" final token value " + video_token_final);
        var vi = new require('mongodb').ObjectID(video_token_final);
        //console.log("helloworld" + vi);
        chapterUser.findOne({_id:vi,courseid:courseid_final},(err1,obj1)=>{
        if(obj1){
        //console.log(" in obj1");
        data.chapterid = obj1._id;
        console.log("california" +  data.chapterid);
        data.courseid = obj1.courseid;
        //console.log("california" +  data.courseid);
        data.chapterheading = obj1.chapterheading;
        //console.log("california" +  data.chapterheading);
        data.chaptersubheading = obj1.chaptersubheading;
        //console.log("california" +  data.chaptersubheading);
        data.videourl = JSON.stringify(obj1.url);
        //console.log("california" +  data.videourl);
        data.videodetails = JSON.stringify(obj1.videodetails);
        //console.log("california" +  data.videodetails);
        data.videoviewmorecontent =  JSON.stringify(obj1.viewmorecontent);
        //console.log("california" +  data.videoviewmorecontent);
        data.chapternumber = obj1.chapterid;
        //console.log("california" + data.chapternumber);    
        chapterUser.findOne({chapterid:{$gt:obj1.chapterid}},(err2,obj2)=>{
        if(obj2){
        data.nexturl = obj2._id;
        //console.log("user video file" + data.nexturl);
        response.send(data);
        } else{
        data.nexturl= "nothing";
        //console.log("user video file else loop"+ data.nexturl);
        response.send(data);
        //console.log(" user video file " +  err2);
        }
        });
             // console.log("digitallync" +  JSON.stringify(data));
        }else{
        console.log(err1);
        }               
        }).then(function(){
        //console.log("in  promises");
      //  new userStatus.findOne({userid: userid},(error3,object3)=>{if(object3){
            
        userStatus.findOne({userid:userid},(err,obj)=>{
        if(obj)
        {
            var chp = obj.chapternumber;
          //  console.log("sahiti" + chp);
            console.log("length" +chp.length);
            elements=chp;
            var chapterIdParsed=JSON.stringify(data.chapterid);
            if(!elements.includes(chapterIdParsed))
              { elements.push(chapterIdParsed);
           /* for(var i=0; i<chp.length;i++){
                var s = chp[i];
                console.log("value of s " + s);
                console.log("Elements at the begining of loop :"+elements);
               // var k;
                //if(s!=""&&s!=null)
                 var k="\""+data.chapterid+"\"";
             
                //k = s.replace('"',"").replace('"',"");
                console.log("jjj"+ k+"aa");
           //  elements.push(JSON.stringify(chp[i]));
              console.log( "jjj" + JSON.stringify(data.chapterid)+"bb");
                if(!s.localeCompare(JSON.stringify(data.chapterid))){
                    console.log("in if loop");
                    console.log("  sfo" + s);
                    console.log(" sfo" + data.chapterid);
                              //   elements.push(JSON.stringify(chp[i]));
                    console.log(" If loop elements :"+elements);
                    console.log(s+""+ data.chapterid);
                    console.log( " not saved");
                }else{
                    console.log(" in else loop");
                    console.log(data.chapterid);
                    console.log(" Elements in array before append: " +elements);
                    elements.push(JSON.stringify(data.chapterid));
                    console.log(" Elements after append: "+elements);

                }
                //elements.push(s);
                    
            }*/
         /*   console.log(" Elements before push : "+elements);
            userStatus.update({chapternumber: elements},(error4,object4)=>{
                        if(!object4) console.log("error4" + error4);
                        else console.log("updated successfully");
                    });              }     
                    
//            if(chp> data.chapternumber){
//                console.log("not updated");
//            }else{
//                userStatus.update({chapternumber: data.chapternumber},(error4,object4)=>{
//                                  if(!object4){
//                    console.log("error4" + error4);
//                }else{
//                    console.log("updated successfully");
//                }
//                                  });
//            }
            
            
          //  console.log("successfully updated");
     /*   }else{
            console.log(data.chapterid);
           elements.push(JSON.stringify(data.chapterid));
                     //   elements.push(data.chapterid);

             new userStatus({userid: userid,courseid: data.courseid, chapternumber: elements, examid:0, assignmentid:0}).save((error2)=>{if(error2){console.log(error2);}else{console.log("saved successfully");}}); 
            console.log(err);
        }        
        });
    
           
        });
            
            
           


    }
    */
}}
 module.exports = new UserChapterExams();

