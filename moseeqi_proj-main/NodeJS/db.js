const mongoose = require('mongoose');

mongoose.connect('//your db connection key here', (err, db) => {
    if (!err) {
        console.log('MongoDB connection succeeded');
        // var dbo = db("moseeqi123")
    }

    else {
        console.log('Error in DB connection :' + JSON.stringify(err, undefined, 2));
    }
})

module.exports = mongoose;