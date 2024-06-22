const express = require('express');
const router = express.Router();

var {user} = require('../models/user.js');
var {artist} = require('../models/artist.js');
var {songartist}  = require("../models/song_artist.js")
console.log("this is sign in controller");

router.get("/:EmaiL/:PassworD", (req,res) => {
    console.log("sign in get request")
    const Email = req.params.EmaiL;
    console.log(Email);
    const Password = req.params.PassworD;
    console.log(Password)
    console.log("signin parameters in get request")
    user.find({email:Email, password:Password} , (err, data) => {
        if(err){res.status(500).send(err)
            console.log("in err")
        console.log(err)}
        else{
            res.status(200).send(data);
            console.log(data)
            console.log("in data")
        }
    })
})

router.get("/DEKHLAY/acha/:pee", (req,res) => {
    console.log("sign in get request")
    res.send([{h:"HELLO"}])
})


module.exports = router;




