const express = require('express');
const router = express.Router();

var {playlist} = require('../models/playlist.js');
var {song} = require('../models/song.js');


router.post("/" , async(req,res) => {
    console.log("this is array from frontend" , req.body.sendarray)
    let arrayhere = JSON.parse(req.body.sendarray)
    console.log("this is array rec" , arrayhere)
    let check  = arrayhere[1]
    console.log("check" , check)
    // let songsarray = []

    const songsarray = await awaitfunction(check)

    // for (const checksongs of check) {
    //     console.log("this is for loop")
    //     song.find({songID: checksongs} , async (err,data) => {
    //         console.log("this is find")
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             const intarray = data[0]
    //             console.log("this is else")
    //             // await songsarray.push(intarray)
    //         }
    //     })
    // }
    // console.log("this is songs array" , songsarray)

    // check.forEach(element => {
        
    //     console.log("element" , element)
    //     song.find({songID: element} , (err,data) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             const interarray = data[0]
    //             // console.log("this is data in for each in playlist cont" , data)
    //             songsarray.push(interarray)
    //             console.log("songs array" , songsarray)
    //             console.log("data pushed" , interarray)
    //         }  
    //         console.log("songs array 2" , songsarray)

    //     })
        
    // });
    
    

    var PLAYLIST = new playlist({
        userid: req.body.id,
        playlistname: req.body.playlistname,
        playlistsongs: songsarray
    }).save((err,doc) => {
        if (err) {
            res.status(500).send(err)
            console.log
        }
        else {
            res.status(200).send(doc)
            console.log("final data saved" , doc)
        }
    })

})

async function awaitfunction(check) {
    let songsarray = []

    for (const checksongs of check) {
            console.log("this is for loop")
            // let shop = await shop_db.find({ _id: order.shopID }).exec();
            // const docs = check.map((checksongs, index) => {
            //     song.find({artistid: checksongs})
            // })
            
            // const items = await Promise.all(docs)
            const docs = await song.find({songID: checksongs})
            const songsobj = docs[0]
            songsarray.push(songsobj)
            console.log("these are docs" , docs)
            console.log("i am here")
        }

        console.log("songs array in func", songsarray)
        // return names
        return songsarray
}
// const data = await Recipe.find();
    // docs is an array of promises
    // const docs = data.map((item, index) => {
    //   Recipecat.findOne({_id: item})
    // });
    // items is an array of documents returned by findOne
    // const items = await Promise.all(docs);
    // now you can map and get the names
    // const names = items.map(item => item.name);




router.get("/:id" , (req,res) => {
    const id = req.params.id

    song.find({artistid: id} , (err,doc) => {
        if (err) {
            console.log(err)
            res.status(500).send(false)
        }
        else {
            res.status(200).send(doc)
            console.log(doc)
        }
    })

})

router.get(":/id/:category" , (req,res) => {
    const id = req.params.id
    const category = req.params.category

    if (category == "true") {
        song.find({} , (err,data) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            }

            else {
                console.log(data)
                res.status(200).send(err)
            }
        })
    }

    if (category == "false") {
        song.find({listener: "all"} , (err,data) => {
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
module.exports = router;