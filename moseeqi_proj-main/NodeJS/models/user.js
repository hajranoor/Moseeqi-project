const mongoose = require("mongoose");

var user = mongoose.model("user", {
  myID: { type: Number },
  email: { type: String },
  phone: { type: String },
  username: { type: String },
  first_name: { type: String },
  last_name: { type: String },
  password: { type: String },
  category: { type: String },
  cardholder_name: { type: String },
  creditcard_no: { type: String },
  card_pin: { type: String },
  billing_address: { type: String },
  profilepicture: {type:String},
  bio: {type:String},
  subscriptionstatus: {type:String},
  followers: [ { username: String , id: Number , firstname: String , lastname: String, status: String}],
  following: [{username: String, id:Number, status: String}],
  status: {type:String}
});

module.exports = { user };
