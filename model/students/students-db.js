`use strict`;

let db = global.db;

let Schema = db.Schema;
let studentSchema = new Schema(
    {
        //values for the schema
        school_id: {type: String, default:""}, //if no data is entered, you should have an ID automatically generated 
        class_id: {type:String},
        arm_id: {type:String},
        session: {type:String},
        reg_number: {type:String},
        roll_number: {type:String},
        group: {type:String},
        First_name: {type:String},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        Last_name: {type:String},
        Middle_name: {type:String, default:""},    //If a data is not entered, the field shall be accepted blank                                                                                                                                                                                                                                                                                                                                                                                                                         
        gender: {type:String},
        religion: {type:String},
        blood_group: {type:String},
        nationality: {type:String},
        state: {type:String},
        lga: {type:String},
        dob: {type:String},
        photo: {type:String},
        club: {type:String},
        father_name: {type:String},
        f_phone_number: {type:String},
        mother_name: {type:String},
        m_phone_number: {type:String},
        guardian_name: {type:String},
        g_phone_number: {type:String},
        permanent_address: {type:String},
        current_address: {type:String},
        createdAt: {type: Date, default: Date.now} //Date.now is to take the exact date at which the details are entered
    }
);

//This line below exports the whole module to db.model
module.exports.studentsModel = db.model('students', studentSchema);