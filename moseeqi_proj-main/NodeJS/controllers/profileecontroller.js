const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const multer = require("multer");
const { artist } = require("../models/artist.js");
const { listener } = require("../models/listener.js");
const { song } = require("../models/song.js");
var { songartist } = require("../models/song_artist.js");
var { user } = require("../models/user.js");

router.get("/:id/:substatus" , (req,res) => {
    const substatus = req.params.substatus
    console.log("this is id in profilee song get" , req.params.id)
    const id = req.params.id
    const allvar = "all"

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

    else {
        song.find({artistid: id , listener: allvar} , (err,data) => {
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

router.get("/:name/:id/:substatus" , (req,res) => {
    const id = req.params.id
    user.find({myID: id} , (err,data) => {
        if (err) {
            res.status(500).send(err)
            console.log(err)
        }
        else {
            res.status(200).send(data)
            console.log("artist header info sent to frontend" , data)

        }
    })
})


router.post("/" , async (req,res) => {
    let artistarray = []
    const listenerid = req.body.listenerid
    const artistid = req.body.artistid
    console.log("lis and art ids" , listenerid, artistid)
    let listenerarray = await getuserobj(listenerid)
    console.log("listener array" , listenerarray)

    const docs = await user.find({myID: artistid})    
    artistarray.push(docs[0])
    console.log("artist info" , artistarray)
    console.log("before update")

    

    var myQuery = {myID: artistid}
    var newValues = {$push : {followers : {username: listenerarray[0].username , id: listenerarray[0].myID , firstname: listenerarray[0].first_name, lastname: listenerarray[0].last_name , status: "active"}}}

    user.updateOne(myQuery , newValues , (err,doc) => {
        if (!err) {
            console.log("followers update")
            res.status(200).send(doc)
        }
        else {
            console.log(err)
            res.status(500).send(err)
        }
    })

    var myQuery2 = {myID: listenerid}
    var newValues2 = {$push: {following: {username: artistarray[0].username , id: artistarray[0].myID, status: "active"}}}

    user.updateOne(myQuery2, newValues2 , (err,doc) => {
        if (err) {
            console.status(500).send(err)
        }
        else {
            console.log("following update" , doc)
        }
    })
   



})

async function getuserobj(id) {
    let userarray = []
    const doc = await user.find({myID: id})
    userarray.push(doc[0])
    return userarray

}



module.exports = router;