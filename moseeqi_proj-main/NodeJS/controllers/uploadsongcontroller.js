const express = require("express");
const router = express.Router();
const multer = require("multer");
var { songartist } = require("../models/song_artist.js");
var { song } = require("../models/song");
const { playlist } = require("../models/playlist.js");

//get playlist name, find query to get id, append the song, artist id in two tables ie playlist and playlist song

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

router.post("/", upload.array('cover'), (req, res) => {
  let listeners;
  let py = req.body.playlist
  console.log("this is playlist on console" , py)
  if (req.body.listeners == "all listeners") {
    listeners = "all"
  }
  if (req.body.listeners == "premium listeners") {
    listeners = "premium"
  }
  const statuss = "active"

    console.log("uploadsong")
    const file = req.files
    console.log(file)
    console.log("name" , req.body.name)
    let picture;
    let songName;
    if (file[0].mimetype == "image/jpeg" || file[0].mimetype == "image/png") {
        picture = file[0].filename
        songName = file[1].filename
    }
    else {
        picture = file[1].filename
        songName = file[0].filename
    }

    SONGID = song.find({}).sort({songID: -1}).limit(1).then((oldSong) => {
      let songId;
      if (oldSong.length == 0) {
        songId = 1;
      }
      else {
        songId = oldSong[0].songID + 1;
      }

      var SONG = new song({
        songID: songId,
        song_name: songName,
        picture: picture,
        description: req.body.description,
        nameofthesong: req.body.name,
        genre: req.body.genre,
        listener: listeners,
        artistid: req.body.sendingID,
        status: statuss
    }).save((err, doc) => {
        if (!err) {
          console.log("song ADDED");
          res.send(doc);
          console.log("this is artist id and playlist name from frontend" , req.body.sendingID, req.body.playlist)
          console.log("songs doc being saved in playlist" , doc)

          var myQuery2 = {userid: req.body.sendingID , playlistname: req.body.playlist}
          var newValues = {$push: {playlistsongs: doc}}
          playlist.updateOne(myQuery2, newValues, (err,data) => {
            if (err) {
              console.log(err)
            }
            else {
              console.log("song saved in playlist in uploadsong" , data)

            }
          })

    //       var myQuery2 = {myID: listenerid}
    // var newValues2 = {$push: {following: {username: artistarray[0].username , id: artistarray[0].myID}}}

    // user.updateOne(myQuery2, newValues2 , (err,doc) => {
    //     if (err) {
    //         console.status(500).send(err)
    //     }
    //     else {
    //         console.log("following update" , doc)
    //     }
    // })







        } else {
          console.log(err);
          console.log(
            "Error in song save :" + JSON.stringify(err, undefined, 2)
          );
          res.json({message: 'error occured', error: err})
        }
      });
    })
});

router.get('/getSongsList', (req,res)=>{
    song.find({}).then((songs)=>{
        res.send(songs)
    })
})

router.get("/:userid" , (req,res) => {
  const id = req.params.userid
  console.log("this is id" , id)
  playlist.find({userid: id} , (err,doc) => {
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
