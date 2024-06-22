const express = require('express');
const router = express.Router();

var {user} = require('../models/user.js');
var {artist} = require('../models/artist.js');
var {songartist}  = require("../models/song_artist.js");
const { song } = require('../models/song.js');


//get artist songs
router.get("/:idrec"   , (req,res) => {
    const userid = req.params.idrec;
    
    song.find({artistid:userid} , (err, data) => {
        if(err) {
            res.status(500).send(false)
            console.log(err)
        }
        else {
            res.status(200).send(data);
            console.log(data)
        }
    })
})

//get artist information
router.get("/:id/:username" , (req,res) => {
    console.log("get artist info")
    const userid = req.params.id;
    console.log(userid) 

    user.find({myID: userid} , (err,data) => {
        if (err) {
            res.status(500).send(false)
        }
        else {
            res.status(200).send(data)
            console.log(data)
        }
    })


    // artist.find( {artistid: userid} , (err, data) => {
    //     if (err) {
    //         res.status(500).send(false)
    //         console.log(err)
    //     }
    //     else {
    //         res.status(200).send(data)
    //         console.log(data)
    //     }
    // })
});




module.exports = router;








    // songIDarray = []
    // songinfoarray = []

    // songartist.find({ArtistID: idrec} , (err,data) =>{
    //     if (err) {
    //         res.status(500).send(err)
    //     }
    //     else {
    //         data.forEach(element => {
    //             console.log(element.ArtistID)
    //             artistidstore = element.ArtistID
    //             songIDarray.push(artistidstore)
    //         });
    //         console.log("this is song id array" , songIDarray)
    //         songIDarray.forEach(idofsong => {
    //             song.find({songID : idofsong}, (err,data)=> {
    //                 if (err) {
    //                     res.status(500).send(err)
    //                 }
    //                 else {
    //                     console.log("ids matched from song collection")
    //                     console.log(data)
    //                     data.forEach(element => {
    //                         sendingdatastore = element
    //                         songinfoarray.push(element)
                            
    //                     })
    //                 }
    //             })     
    //         })
    //         console.log("final response sent", songinfoarray)
    //         res.status(200).send(songinfoarray)  
    //     }
    // }
    // )


// arr.forEach(element => {
//     console.log(element);
//   });

