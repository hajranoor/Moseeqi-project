const mongoose = require('mongoose');

var subscription = mongoose.model('subscription', {
    
    subsID: {type: Number},
    usersubsid:{type:Number},
    total_revenue:{type:String}
    
})

module.exports = {subscription};

