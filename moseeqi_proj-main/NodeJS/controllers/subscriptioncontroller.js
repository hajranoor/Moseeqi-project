const express = require('express');
const router = express.Router();

var {user} = require('../models/user.js')
var {subscription} = require('../models/subscription.js');
const { artist } = require('../models/artist.js');
const { listener } = require('../models/listener.js');

//post request if subscription true
router.post("/", (req,res) => {

    //user table update
    var myQuery = {myID: req.body.ID};
    var newValues = {$set: {cardholder_name: req.body.cardUserName, creditcard_no: req.body.cardNumber, card_pin: req.body.cardPin, billing_address: req.body.address, subscriptionstatus: "true"}};
    user.updateOne(myQuery, newValues, (err,doc) => {
        if (!err) {
            console.log("user table update")
            res.send(doc);
        }
        else {
            console.log("error")
            console.log('Error in user update :' +JSON.stringify(err,undefined,2));
        }
    });

    //subcription id increment
    IDID = user.find({}).sort({myID : -1}).limit(1).then ((oldUser) =>{
        let userId
        if (oldUser.length == 0) {
            userId = 1;
        }
        else {
            userId = oldUser[0].myID + 1
        }

        //subscription table
        var SUBSCRIPTION = new subscription({
            usersubsid: req.body.ID,
            subsID: userId
        }).save((err,doc) => {
            if (!err) {
                console.log("subscriber ADDED")
            }
            else {
                console.log(err)
                console.log('Error in subscriber save :' +JSON.stringify(err,undefined,2));
            }
        });

    
    })
});



module.exports = router;



