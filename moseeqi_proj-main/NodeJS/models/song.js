const mongoose = require('mongoose');

var song = mongoose.model('song', {
    songID: {type:Number},
    song_name: {type:String},
    picture: {type:String},
    genre: {type:String},
    description: {type: String},
    listener: {type: String},
    artistid: {type:Number},
    nameofthesong: {type:String},
    likearray: [{username: String, id:String}],
    playcount: [{userid: String}],
    status: {type: String}
    
})

module.exports = {song};