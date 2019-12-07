const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const db = process.env.mongoURI;

require('dotenv').config();

var connection=mongoose.createConnection(process.env.mongoURI);

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

courseTake:{type:Array,items:[{courseName: {type:String}}]}

});

module.exports = User = connection.model('user', UserSchema);