const express = require('express');
const { artist } = require('../models/artist.js');
const router = express.Router();
const { listener } = require('../models/listener.js');
var {user} = require('../models/user.js')
console.log("useraccountcontroller")


router.post("/abc", (req,res) => {
    console.log("phone number update")
    //user table update
    console.log(req.body.ID)
    console.log(req.body.phoneNumber)

    var myQuery = {myID: req.body.ID};
    var newValues = {$set: { phone: req.body.phoneNumber}};
    user.updateOne(myQuery, newValues, (err,doc) => {
        if (!err) {
            console.log("user table update")
            res.send(doc);
        }
        else {
            console.log("error")
            console.log('Error in user update :' +JSON.stringify(err,undefined,2));
        }
    });

});

router.post("/changepassword", (req,res) => {

    console.log("change password")

    //user table update
    var myQuery = {myID: req.body.ID};
    var newValues = {$set: {  password: req.body.passWord}};
    user.updateOne(myQuery, newValues, (err,doc) => {
        if (!err) {
            console.log("user table update")
            res.send(doc);
        }
        else {
            console.log("error")
            console.log('Error in user update :' +JSON.stringify(err,undefined,2));
        }
    });

});


// router.delete("/:myid/:category", (req,res) => {
//     console.log(req.params.myid)
//     console.log(req.params.category)
//     console.log("deactivate")
//   var myquery = { myID : req.params.myid };
//   user.deleteOne(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 user deleted");

//     if(req.params.category == "artist"){
//         var myquery1 = { artistid : req.params.myid };
//         artist.deleteOne(myquery1, function(err, obj) {
//             if (err) throw err;
//             console.log("1 artist deleted");
//             res.send(true)
//       })
//       }
    
//     if(req.params.category == "listener"){
//         var myquery2 = { listenerid : req.params.myid };
//         listener.deleteOne(myquery2, function(err, obj) {
//             if (err) throw err;
//             console.log("1 listener deleted");
//             res.send(true)
//       })
//       }

//   });
 
// });


router.delete("/:myid/:category", (req,res) => {
    console.log(req.params.myid)
    idd = parseInt(req.params.myid)
    console.log(typeof (idd))
    console.log(req.params.category)
    console.log("delete")
  var myquery = {  myID : req.params.myid };
  user.deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 user deleted");
    statuss = "inactive"
    console.log(statuss)
    if(req.params.category == "artist"){
        var myquery1 = { artistid : req.params.myid };
        artist.deleteOne(myquery1, function(err, obj) {
            if (err) throw err;
            console.log("1 artist deleted");
            user.updateMany({  following : { $elemMatch :{ id : idd }}},
                {$set : { " following.$.status" : statuss }}, function(err, obj) {
                if (err) throw err;
                console.log(obj)
                console.log("following of user(listener) has decreased");
                res.send(true)
                })
      })
      }

    if(req.params.category == "listener"){
        var myquery2 = { listenerid : req.params.myid };
        listener.deleteOne(myquery2, function(err, obj) {
            if (err) throw err;
            console.log("1 listener deleted");
            user.updateMany({ followers : { $elemMatch :{ id : idd }}},
                {$set : { "followers.$.status" : statuss }}, function(err, obj) {
                if (err) throw err;
                console.log(obj)
                console.log("followers of user(artist) has decreased");
                res.send(true)
                })
      })
      }

  });
 
});




module.exports = router;
