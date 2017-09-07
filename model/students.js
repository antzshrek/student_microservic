'use strict';

const studentsDb = require("./students/students-db.js");
const studModel= studentsDb.studentsModel;


function students(){

        //Creates data
    students.prototype.create = (properties, callback) =>{
            var stu = new studModel(properties);
            stu.save((err, record) =>{
      
                if(err){
                    callback(err);
                }else{
                    callback(record !== null ? record.toJSON() : null);
                }
            })
     }


    students.prototype.find = (callback) => {
        
        studModel.find({}, (err, record) => {
          
          if(err){
              callback(err);
          }else{
              callback(record);
          }
          
      });
    };

    //Finds data by ID
    students.prototype.findById = (id, callback) => {  
        studModel.findOne({_id : id}).lean().exec((err, record) => {   
            if (err) {
                callback(err);
            }else {
                callback(record);
            }
            
        });
        
    };
    
        //Updates data by ID
    students.prototype.findByIdAndUpdate = (id, callback) => {  
        studModel.updateOne({_id : id}).lean().exec((err, record) => {   
            if (err) {
                callback(err);
            }else {
                callback(record);
            }
            
        });
        
    };
        //Dalete data by ID
    students.prototype.deleteById = (id, callback) => {  
        studModel.deleteOne({_id : id}).lean().exec((err, record) => {   
            if (err) {
                callback(err);
            }else {
                callback(record);
            }
            
        });
        
    };

}

module.exports.students = students;