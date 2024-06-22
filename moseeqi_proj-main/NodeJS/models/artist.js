const mongoose = require('mongoose');

var artist = mongoose.model('artist', {
    artistid: {type:Number},
    artist_followers: {type:String},
    // artist_bio:{type:String},
    // subscriptionstatus: {type:String}
})

module.exports = {artist};