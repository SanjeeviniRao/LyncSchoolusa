'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


let examsSchema  = mongoose.Schema({
    chapterid : {
        type:String,
        unique:false
       
    },
    
    test : []
});

module.exports  =  mongoose.model('exams', examsSchema);