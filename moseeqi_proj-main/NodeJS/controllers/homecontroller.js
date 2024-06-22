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



router.get("/:id" , (req,res) => {
    const id = req.params.id
    playlist.find({userid : id} , (err,data) => {
        if (err) {
            console.log(err)
            res.send(false)
        }
        else {
            console.log(data)
            res.status(200).send(data)
        }
    })
})

router.get("/:id/:category" , (req,res) => {
    user.find({category: "artist"} , (err,data) => {
        if (err) {
            res.send(false)
            console.log(err)
        }
        else {
            res.status(200).send(data)
            console.log(data)
        }
    })
})

module.exports = router;
