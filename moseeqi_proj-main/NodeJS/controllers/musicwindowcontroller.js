const express = require("express");
const router = express.Router();
const multer = require("multer");
var { songartist } = require("../models/song_artist.js");
var { song } = require("../models/song");
const { playlist } = require("../models/playlist.js");

router.get("/:songid" , (req,res) => {
    songid = req.params.songid

    song.find({songID : songid} , (err,data) => {
        if (err) {
            res.status(500).send(err)
            console.log(err)
        }
        else {
            res.status(200).send(data)
            console.log(data)
        }
    })
})

router.post("/" , (req,res) => {
    
    var myQuery2 = {songID: req.body.songid}
    var newValues2 = {$push: {playcount: {id: req.body.userid}}}

    song.updateOne(myQuery2, newValues2 , (err,doc) => {
        if (err) {
            console.status(500).send(err)
            console.log(err)
        }
        else {
            console.log("play count update" , doc)
            res.status(200).send(doc)
        }
    })

})

// IDID = user.find({}).sort({myID : -1}).limit(1).then ((oldUser) =>{
//     let userId
//     if (oldUser.length == 0) {
//         userId = 1;
//     }
//     else {
//         userId = oldUser[0].myID + 1
//     }

module.exports = router;