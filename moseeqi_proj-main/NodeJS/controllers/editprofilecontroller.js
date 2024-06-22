const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const multer = require("multer");
const { artist } = require("../models/artist.js");
const { listener } = require("../models/listener.js");
const { song } = require("../models/song.js");
var { songartist } = require("../models/song_artist.js");
var { user } = require("../models/user.js");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./my-uploads");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      let extenArr = file.originalname.split(".");
      let exten = extenArr[extenArr.length - 1];
      cb(null, `${file.fieldname}-${uniqueSuffix}.${exten}`);
    },
  });
  
  
const upload = multer({ storage: storage });

//getting information for profile
router.get("/:id/:category" , (req,res) => {
    const id = req.params.id
    const category = req.params.category

    user.find({myID: id} , (err,data) => {
        if (err) {
            res.status(500).send(err)
            console.log(err)
        }
        else {
            res.status(200).send(data)
            console.log(data)
        }
    })



    // if (category == "artist") {
    //     artist.find({artistid: id} , (err,data) => {
    //         if (err) {
    //             res.status(500).send(false)
    //             console.log(err)
    //         }
    //         else {
    //             res.status(200).send(data)
    //             console.log(data)
    //         }
    //     })
    // }
    // else {
    //     listener.find({listenerid: id} , (err,data) => {
    //         if (err) {
    //             res.status(500).send(false)
    //             console.log(err)
    //         }
    //         else {
    //             res.status(200).send(data)
    //             console.log(data)
    //         }
    //     })
    // } 
})

//updating profile
router.post("/" , upload.single('Picture'), (req,res) => {
    const file = req.file
    console.log("bio rec" , req.body.bio)
    console.log("file" , file)
    console.log("id" , req.body.id)
    let picture
    picture = file.filename
    var myquery = {myID: req.body.id}
    var newvalues = {$set: {bio: req.body.bio , profilepicture: picture}}
    user.updateOne(myquery, newvalues , (err,doc) => {
        if (err) {
            res.status(500).send(err)
            console.log(err)
        }
        else {
            res.status(200).send(doc)
            console.log(doc)
        }
    })

   
})







module.exports = router;
