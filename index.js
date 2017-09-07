global.db = require('./lib/db/db.js')();

var express = require("express");
var methodOverride = require("method-override");
var compress = require("compression");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");
var cors = require('cors');
var app = express();


var router = require("./controller/router");

app.enabled('trust proxy');
app.set('view engine', 'jade');
// app.set('views', __dirname + 'views');
app.use(morgan('dev'));
app.use(compress());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.raw({type:'application/vnd.custom-type'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));


var port = process.env.PORT || 3000;
var ip = process.env.IP || '0.0.0.0';
app.listen(port,ip);

app.get('/', function(req,res){
	res.send('Welcome to student module');
});

router.route(app);



console.log("server started at " + ip + " and the port is " + port);