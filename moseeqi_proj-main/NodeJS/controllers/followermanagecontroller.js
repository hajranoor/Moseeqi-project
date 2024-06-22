const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const multer = require("multer");
const { artist } = require("../models/artist.js");
const { listener } = require("../models/listener.js");
const { song } = require("../models/song.js");
var { songartist } = require("../models/song_artist.js");
var { user } = require("../models/user.js");
var {playlist} = require("../models/playlist.js")



router.get("/:id/:artistid" , (req,res) => {
    let responsee
    const userid = req.params.id
    const artistid = req.params.artistid
    console.log("this is user and artist id" , userid, artistid)

    // db.inventory.find( { "instock": { warehouse: "A", qty: 5 } } )

    // user.find({myID: artistid , followers: {id: userid}}, (err, data) => {
    //     if (err) {
    //         console.log(err)
    //         res.status(500).send(err)
    //     }
    //     else {
    //         console.log("follower status reponse sent" , data)
    //         res.status(200).send(data)
    //     }
    // })

    // playlist.updateMany({ playlistsongs : { $elemMatch :{ nameofthesong : req.params.name , artistid : idd }}},
    //     {$set : { "playlistsongs.$.status" : statuss }}, function(err, obj) {
    //      if (err) throw err;
    //      var myquery = {  nameofthesong : req.params.name , artistid : idd };
    //      song.deleteOne(myquery, function(err, obj) {
    //      if (err) throw err;
    //      console.log("1 song deleted");
    //      console.log(obj)
    //      res.send(true)
    //     })

    user.findOne({myID: artistid , followers: {$elemMatch: {id: userid}}} , (err,doc) => {
        if (err) {
            console.log("this is if condition")
            console.log(err)
            res.status(500).send(err)
        }
        else {
            console.log("this is else condition")
            console.log("follow manage response" , doc)
            if (doc !== null) {
                doc.followers.forEach(element => {
                    if (element.id == userid) {
                        responsee = "true"
                    }
                    
                });
                
            }
            else {
                responsee = "false"
            }
            
            res.send(responsee)
            console.log("this is responsee" , responsee)

        }
    })







})

router.post("/" , (req,res) => {
    console.log("this is unfollow function")
    const userid = req.body.listenerid
    const artistid = req.body.artistid
    // playlist.updateMany({ playlistsongs : { $elemMatch :{ nameofthesong : req.params.name , artistid : idd }}},
    //     {$set : { "playlistsongs.$.status" : statuss }}, function(err, obj) {
    //      if (err) throw err;
    //      var myquery = {  nameofthesong : req.params.name , artistid : idd };
    //      song.deleteOne(myquery, function(err, obj) {
    //      if (err) throw err;
    //      console.log("1 song deleted");
    //      console.log(obj)
    //      res.send(true)
    //     })

    user.updateOne({myID: artistid , followers: {$elemMatch : {id: userid}}},
        {$set : {"followers.$.status" : "inactive"}}, (err,data)  => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            }
            else {
                console.log("this is update in unfollow in follow manage" , data)
                res.status(200).send(data)
            }
        })

    // user.find({myID: artistid} , (err,data) => {
    //     if (err) {
    //         res.status(500).send(err)
    //     }
    //     else {
    //         data.followers.updateOne({})
    //         res.status(200).send(data)

    //     }
    // })


})






module.exports = router;