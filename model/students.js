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
    students.prototype.updateById = (option, callback) => {
     studModel.findOneAndUpdate({id: option.Id}, 
     {
         $set: {
             	school_id:option.schoolId,
				class_id:option.classId,
				arm_id:option.armId,
				session:option.session,
				reg_number:option.regNumber,
				roll_number:option.rollNumber,
				group:option.group,
				First_name:option.fname,
				Middle_name:option.mname,
				Last_name:option.lname,
				gender:option.gender,
				religion:option.religion,
				blood_group:option.bloodgroup,
				nationality:option.nationality,
				state:option.state,
				lga:option.lga,
				dob:option.dob,
				photo:option.photo,
				club:option.club,
				father_name:option.fatherName,
				f_phone_number:option.fatherPhone,
				mother_name:option.motherName,
				m_phone_number:option.motherPhone,
				guardian_name:option.guardianName,
				g_phone_number:option.guardianPhone,
				permanent_address:option.permanentAdd,
				current_address:option.presentAdd
         }
     },
     
     function(err, record) {
    if (err){
      callback(err);
    }else{
    callback(record);
    }
  });
};
};
    
        
    
    //     //Dalete data by ID
    students.prototype.deleteById = (id, callback) => {  
        studModel.deleteOne({_id : id}).lean().exec((err, record) => {   
            if (err) {
                callback(err);
            }else {
                callback(record);
            }
            
        });
        
    };



module.exports.students= students;