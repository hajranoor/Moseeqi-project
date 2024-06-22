const mongoose = require('mongoose');

var songartist = mongoose.model('songartist', {
    ArtistID: {type:Number},
    mySongID: {type:Number}
    
    
})

module.exports = {songartist};