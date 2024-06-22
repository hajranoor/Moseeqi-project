const express = require('express');
const { song_artist } = require('../models/song_artist.js');
const { song } = require('../models/song.js');
const router = express.Router();

var {user} = require('../models/user.js');
const { playlist } = require('../models/playlist.js');
console.log("admin-controller")

router.delete("/:name/:artistid/:songid", async (req,res) => {
    console.log(req.params.name)
    console.log(req.params.artistid)
     idd = parseInt(req.params.artistid)
    console.log(typeof (idd))
    console.log(req.params.songid)
    console.log("delete")
    statuss = "inactive"
    console.log(statuss)
    playlist.updateMany({ playlistsongs : { $elemMatch :{ nameofthesong : req.params.name , artistid : idd }}},
    {$set : { "playlistsongs.$.status" : statuss }}, function(err, obj) {
     if (err) throw err;
     var myquery = {  nameofthesong : req.params.name , artistid : idd };
     song.deleteOne(myquery, function(err, obj) {
     if (err) throw err;
     console.log("1 song deleted");
     console.log(obj)
     res.send(true)
    })

 
  // var myquery1 = { $pull: { playlistsongs:{description : req.params.name , artistid : req.params.artistid } } };
//   playlist.find({ playlistsongs : {$elemMatch: { nameofthesong : "fitoor" , artistid : 2}}} , async (err,data)=>{
//     console.log(

// data
//     )
//     data.map(elem=>{
//       elem.playlistsongs.map(song=>{
//         if (song.nameofthesong == "fitoor" && song.artistid == 2){
//           song.status = "inactive"
//         }
//         return song
//       })
//       return elem
//     }) 
//     // data.save()
//     res.send(true)
//   })
// const artist = await playlist.updateMany(
//   {
//     "playlistsongs.$.nameofthesong": "fitoor",
//     "playlistsongs.$.artistid": 2,
//   },
//   {
//     $set: {
//       "playlistsongs.$.status": statuss,
//     },
//   }
// );

// if (artist) {
//   console.log("Successful");
//   res.send("Successful");
// } else {
//   console.log("UNSuccessful");
//   res.status(500).send("Not successful");
// }

// playlist.updateOne({ playlistsongs : {$elemMatch: { nameofthesong : "fitoor" , artistid : 2}}}, 
//   { $set : {"playlistsongs.$.status" :  statuss} }
//    ,function(err, obj) {
//    if (err) throw err;
//    console.log("1 playlist-song updated");
//   console.log(obj)
//   res.send(true)
//   });
    

  
  });

  
  
  
});

module.exports = router;


