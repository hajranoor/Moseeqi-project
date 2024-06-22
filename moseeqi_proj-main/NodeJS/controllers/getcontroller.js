const express = require("express");
const router = express.Router();
const multer = require("multer");
const { artist } = require("../models/artist.js");
const { playlist } = require("../models/playlist.js");
const { song } = require("../models/song.js");
var { songartist } = require("../models/song_artist.js");
var { user } = require("../models/user.js");

//getting all artists for listeners
router.get('/artistget' , (req,res) => {
    user.find({category:"artist"}).then((artists) => {
        res.send(artists)
        console.log("artists sent" , artists)
    })
})

//getting artist for profile in listener module
router.get('/:username' , (req,res) => {
    console.log("this is get request")
    const username = req.params.username
    user.find({username: username} , (err,data) => {
        if (err) {
            res.status(500).send(false)
            console.log(err)
        }
        else {
            const id = data[0].myID
            artist.find({artistid: id} , (err,data) => {
                if (err) {
                    res.status(500).send(false)
                    console.log(err)
                }
                else {
                    res.status(200).send(data)
                    console.log(data)
                }
            })
        }
    })
})


module.exports = router;


