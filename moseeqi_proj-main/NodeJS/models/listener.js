const mongoose = require('mongoose');

var listener = mongoose.model('listener', {
    listenerid: {type:Number},
    // listenerbio: {type:String},
    listenerFollowing: {type:String},
    // subscriptionstatus: {type:String}
})

module.exports = {listener};