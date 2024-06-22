const express = require('express');
const { artist } = require('../models/artist.js');
const { user } = require('../models/user.js');
const { listener } = require('../models/listener.js');
const router = express.Router();

console.log("admin-deleteusercontroller")


router.get('/getartistList', (req,res)=>{
    artistname = "artist"
    user.find({ category: artistname }).then((users)=>{
        res.send(users)
    })
})

router.get('/getlistenerList', (req,res)=>{
    listname = "listener"
    user.find({ category : listname }).then((users)=>{
        res.send(users)
    })
})



router.delete("/:myid/:username/:category", (req,res) => {
    console.log(req.params.myid)
    console.log(req.params.username)
    console.log(req.params.category)
    console.log("delete")
  var myquery = {  username : req.params.username , myID : req.params.myid };
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
            user.updateMany({ following : { $elemMatch :{ username : req.params.username}}},
                {$set : { "following.$.status" : statuss }}, function(err, obj) {
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
            user.updateMany({ followers : { $elemMatch :{ username : req.params.username}}},
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