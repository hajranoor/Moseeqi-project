const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const router = express.Router();


const {mongoose} = require('./db.js');
var signupController = require('./controllers/signupcontroller');
var signinController = require('./controllers/signincontroller');
var subscriptionController = require('./controllers/subscriptioncontroller')
var uploadController = require('./controllers/uploadsongcontroller')
var getinfoController = require('./controllers/gettinginfocontroller')
var testcontroller = require('./controllers/testcontroller')
var playlistcontroller = require('./controllers/playlistcontroller')
var getcontroller = require('./controllers/getcontroller')
var editprofilecontroller = require('./controllers/editprofilecontroller')
var useraccountcontroller = require('./controllers/useraccountcontroller')
var admincontroller = require('./controllers/admincontroller')
var admindeleteuser = require('./controllers/Admin-deleteuserscontroller')
var profileecontroller = require('./controllers/profileecontroller')
var artistsongscontroller = require('./controllers/artistsongscontroller')
var musicwindowcontroller = require('./controllers/musicwindowcontroller')
var homecontroller = require('./controllers/homecontroller')
var followmanagecontroller = require('./controllers/followermanagecontroller')


//middlewares
var app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(express.static(__dirname + '/my-uploads'));

app.listen(8001, () => console.log('Server started at port: 8001'));

app.use('/signup', signupController);
app.use('/signin', signinController);
app.use('/subscription' , subscriptionController);
app.use('/upload', uploadController);
app.use('/getinfo' , getinfoController);
app.use('/playlist', playlistcontroller);
app.use('/getcont' , getcontroller)
app.use('/editcont' , editprofilecontroller)
app.use('/account' , useraccountcontroller)
app.use('/test' , testcontroller)
app.use('/admin' , admincontroller)
app.use('/admindeleteuser' , admindeleteuser)
app.use('/profilee' , profileecontroller)
app.use('/artistsongs' , artistsongscontroller)
app.use('/musicwindow' , musicwindowcontroller)
app.use('/home' , homecontroller)
app.use('/followmanage' , followmanagecontroller)


module.exports = router;

console.log("this is index.js");

//localhost:3000/signup