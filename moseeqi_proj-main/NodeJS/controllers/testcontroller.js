const bodyParser = require('body-parser');
const express = require('express');
const { playlist } = require('../models/playlist');
const { user } = require('../models/user');
const {song} = require('../models/song')
const router = express.Router();
// var {mongoose} = require('./db.js')


router.get('/:id' , (req,res) => {
    const id = req.params.id
    console.log("in playlist find")

    playlist.find({userid: id} , (err,data) => {

        if (err) {
            res.status(500).send(err)
            console.log(err)
        }

        else {
            aggregateFunction(data)
            res.status(200).send(data)
            
        }
    })
})

function aggregateFunction(data) {
    console.log("this is data from playlist find" , data)
    // data.forEach(element => {
    //     console.log("element" , element.playlistsongs)
    //     playlist.aggregate([
    //         {
    //             $lookup: {
    //                 from: "song" , localField: element.playlistsongs,
    //                 foreignField: "songID" , as: "songsinagg"
    //             }
    //         } ,
    //         {
    //             $match: {
    //                 $and:[{"playlist.__id" : element.__id}]
    //             }
    //         }
    //     ]).exec(function(err,res) {
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             console.log("this is aggregate result" , JSON.stringify(res))
    //         }
    //     })
    // })





    // data.forEach(element => {
    //     console.log("element" , element.playlistsongs)
    //     element.playlistsongs.forEach(element2 => {
    //         console.log("element2" , element2)
    //         playlist.aggregate([ 
    //             {

    //             $lookup: {
    //                 from: "song" , localField: "element2" ,
    //                 foreignField: "songID" , as: "songsinagg"
    //             }
    //         },
    //         {
    //             $match: {
    //                 $and:[{"song.songID":element2}]
    //             }
    //         }
    //     ]).exec(function(err,res) {
    //             if (err) {
    //                 console.log(err)
    //             }
    //             else {
    //                 console.log("aggregate data" , JSON.stringify(res))
    //             }
    //         })
    //     })
        
    // });
    // playlist.aggregate ([{
    //     $lookup: {
    //         from: "song" , localField: "playlistsongs",
    //         foreignField: "songID" , as: "songsinplaylistagg"
    //     }
    // }]).exec(function(err,res) {
    //     if (err) {
    //         console.log(err)
    //     }
    //     else {
    //         console.log("this is aggregate result" , JSON.stringify(res))
    //     }
    // })

}

// ServiceProviders.aggregate([
//     {
//         $lookup:
//         {
//             from :"users",
//             localField:"serviceProvider",
//             foreignField:"_id",
//             as:"userDetails"
//         }
//     },
//     {   $lookup:
//         {
//             from: "services",
//             localField: "serviceCategory",
//             foreignField: "_id",
//             as: "serviceDetails"
//         }
//     },
    
//     {
//         $match:{
//             $and:[{"userDetails.email":req.params.email}]
//         }
//     }
// ]).exec(function(err,data){
//     if (err){
//         console.log("Error in retreiving")
//     }
//     else{
//         res.json(data)
//         console.log("Category Sent")
//     }
// })
module.exports = router;