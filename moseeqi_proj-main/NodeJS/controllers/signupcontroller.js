const express = require("express");
const router = express.Router();

var { user } = require("../models/user.js");
var { artist } = require("../models/artist.js");
var {listener} = require("../models/listener.js")

//sign up post request
router.post("/", (req, res) => {
  console.log("signup post console");
  var status = "false"
  followerarray = []

  //user id increment
  MYID = user
    .find({})
    .sort({ myID: -1 })
    .limit(1)
    .then  (   (oldUser) => {
      let userId;
      console.log(oldUser, "  user");
      if (oldUser.length == 0) {
        userId = 1;
        id = userId;
      } else {
        userId = oldUser[0].myID + 1;
        id = userId;
      }

      //user table
      var USER = new user({
        myID: userId,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        category: req.body.category,
        subscriptionstatus: status,
        status: "active"
      }).save((err, doc) => {
        if (!err) {
          console.log("USER ADDED");
          res.status(200).send(doc);}
           else {
          console.log(err);
          res.status(500).send(err)
          console.log("Error in user save :" + JSON.stringify(err, undefined, 2));
        }
      });

      //artist table
      if (req.body.category == "artist") {
        var ARTIST = new artist({
          artistid : userId
        }).save((err, doc) => {
          if (!err) {
            console.log("artist ADDED");  
          } 
          else {
            console.log(err);
            console.log("Error in artist save :" + JSON.stringify(err, undefined, 2));
          }
        });
      };

      //listener table
      if (req.body.category == "listener") {
        var LISTENER = new listener({
          listenerid: userId
        }).save((err,doc) => {
          if (!err) {
            console.log("listener added")
          }
          else {
            console.log("error in listener save" , err)
          }
        })
      }
    });
});

module.exports = router;


//email validation
router.get("/:email", async(req, res)=>{
  console.log("checking email"+req.params.email)
  let validity
  validity = await user.find({email:req.params.email}).clone().catch(function(err){ console.log(err)})
      if (validity.length == 0 ){
          console.log("result is that email not found")
          res.send(true)
      }
      else{
          console.log("email found")
          res.send(false)
      }
  })


//username validation
router.get("/123/:username", async(req, res)=>{
console.log("checking username"+req.params.username)
let usernamevalidity
usernamevalidity = await user.find({username:req.params.username}).clone().catch(function(err){ console.log(err)})
if (usernamevalidity.length == 0 ){
  console.log("result is that username not found")
  res.send(true)
}
else{
  console.log("username found")
  res.send(false)
}
})

module.exports = router;  
