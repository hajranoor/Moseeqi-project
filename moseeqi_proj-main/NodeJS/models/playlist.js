const mongoose = require('mongoose');

var playlist = mongoose.model('playlist', {
    playlistname: {type:String},
    userid: {type: Number},
    playlistsongs: {type: []}
})

module.exports = {playlist};