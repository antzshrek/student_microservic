function route (app)
{
app.get('/student/new', function(req,res){
    res.send('welcome to students module');
});


app.post('/student/new', function(req, res){



 			var b = {
				school_id:req.body.schoolId,
				class_id:req.body.classId,
				arm_id:req.body.armId,
				session:req.body.session,
				reg_number:req.body.regNumber,
				roll_number:req.body.rollNumber,
				group:req.body.group,
				First_name:req.body.fname,
				Middle_name:req.body.mname,
				Last_name:req.body.lname,
				gender:req.body.gender,
				religion:req.body.religion,
				blood_group:req.body.bloodgroup,
				nationality:req.body.nationality,
				state:req.body.state,
				lga:req.body.lga,
				dob:req.body.dob,
				photo:req.body.photo,
				club:req.body.club,
				father_name:req.body.fatherName,
				f_phone_number:req.body.fatherPhone,
				mother_name:req.body.motherName,
				m_phone_number:req.body.motherPhone,
				guardian_name:req.body.guardianName,
				g_phone_number:req.body.guardianPhone,
				permanent_address:req.body.permanentAdd,
				current_address:req.body.presentAdd
 			};

 			var stu =require("../model/students.js").students;
		
		     var c = new stu();
		     c.create(b, function(data){
			 //console.log(data);
			 res.json({"status":10, "message":"record created", data:data });
		});

 });

 app.get('/student/all', function (req, res, next){

    	var stu = require("../model/students.js").students;
		
		var c = new stu();
		
		c.find(function(data) {
		res.json({"status":11, "message":"record found", data: data});
		});
	});



app.get('/student/:id', function (req, res, next) {
		
		var stu = require("../model/students.js").students;
		
		var c = new stu();
		
		if(req.params.id === ""){
				res.json({"status":"-102", "info":"(id) parameter is required"});
				return;
		}
		
		var id = req.params.id;
		c.findById(id,function(data) {
				res.json({"status": 11, "message":"record found", data: data});
		});		
	});

app.delete('/student/:id', function (req, res, next) {
		
		var stu = require("../model/students.js").students;
		
		var c = new stu();
		
		if(req.params.id === ""){
				res.json({"status":"-102", "info":"(id) parameter is required"});
				return;
		}
		
		var id = req.params.id;
		c.deleteById(id,function(data) {
				res.json({"status":13, "message":"record deleted", data: data});
		});		
	});


app.put('/student/:id', function(req, res){
	var stu = require("../model/students.js").students;
		
		var c = new stu();
		
		if(req.params.id === ""){
				res.json({"status":"-102", "info":"(id) parameter is required"});
				return;
		}
		
		var id = req.params.id;
		c.findByIdAndUpdate(id,function(data) {
			res.json({"status":12, "message":"record updated", data: data});
			
		});

 });





}

module.exports.route = route;