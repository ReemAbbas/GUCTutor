const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var connection=mongoose.createConnection("mongodb+srv://user:1234@cluster0-phpqs.mongodb.net/db?retryWrites=true");


// Create the schema

const UserSchema = new Schema({

    firstName: {type: String,  required: true},

    lastName: {type: String,  required: true},

    password: {type: String, required: true},

    email: {type: String, required: true },

   phoneNumber: {type: Number, required: true},

   GUCID:{type:String,required: true},

   gender:{type:String},  //implemented with drop-down

   location:{type:String},  //implemented with drop-down

//attributes that not all users have 

courseGive:{type:Array,items:[{courseName: {type:String}}]},

courseTake:{type:Array,items:[{courseName: {type:String}}]},

requests:{type:Array,items:[{msg:{type:String},receiverID:{type:Number}}]},

offers:{type:Array,items:[{msg:{type:String},senderID:{type:Number}}]},

notifications:{type:Array,items:[{msg:{ytype:String}}]}

});

module.exports = User = connection.model('user', UserSchema);