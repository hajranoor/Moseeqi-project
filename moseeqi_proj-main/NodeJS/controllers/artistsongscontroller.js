const express = require("express");
const router = express.Router();
const multer = require("multer");
var { songartist } = require("../models/song_artist.js");
var { song } = require("../models/song");
const { playlist } = require("../models/playlist.js");

router.get("/:id/:substatus" , (req,res) => {
    const id = req.params.id
    const substatus = req.params.substatus

    if (substatus == "true") {
        song.find({artistid: id} , (err,data) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            }
            else {
                console.log(data)
                res.status(200).send(data)
            }
        })
    }

    if (substatus == "false") {
        song.find({artistid: id , listener: "all"} , (err,data) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            }
            else {
                console.log(data)
                res.status(200).send(data)
            }
        })
    }
})


router.post("/" , (req,res) => {
    const songid = req.body.songid
    const userid = req.body.userid
    const username = req.body.username
    var myQuery2 = {songID: songid}
    var newValues2 = {$push: {likearray: {username: username ,id: userid}}}

    song.updateOne(myQuery2, newValues2 , (err,doc) => {
        if (err) {
            console.status(500).send(err)
            console.log(err)
        }
        else {
            console.log("likes update" , doc)
            res.status(200).send(doc)
        }
    })
    
})






module.exports = router;
