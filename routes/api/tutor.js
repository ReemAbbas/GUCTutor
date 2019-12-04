//--------------------express--------------------
const express = require('express');
const router = express.Router();

//--------------------models--------------------
const User = require('../../models/User');

//-------------------pathToSendFile----------------------------
var path = require('path');
const passport = require('passport')

//-------------------authentication----------------------------
var objectid = require("mongodb").ObjectID;
const jwt = require("jsonwebtoken");
var store = require("store");
const tokenKey = require("../../config/keys").secretOrKey;

router.put("/offer", async (req, res) => {
  jwt.verify(store.get("token"), tokenKey, async (err, authorizedData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      try {
        const major=req.body.major;
        const semester=req.body.semester;
        const course=req.body.course;
        const userID = objectid(authorizedData.id);
    
        const user= await User.findOneAndUpdate({'_id':userID},{"$push":{"courseGive":{"$each":[course]}}});
    
        if(!user || user.length==0){
            return res.status(400).json({ error: "User does not exist!" });
          }else{
            return res.status(200).json({ msg: "Course added successfully" });
          }
        } catch (error) {
          console.log(error);
        }
    }
  })  
});

router.get("/getRequests", async (req, res) => {
  jwt.verify(store.get("token"), tokenKey, async (err, authorizedData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      try {
        const course=req.body.course;
        const requestGotten= await User.find( { courseTake: { $all: [course] } } );
    
        if(!requestGotten || requestGotten.length==0){
            return res.status(400).json({ error: "There are currently no requests for this course!" });
          }else{
              var result="";
              for(var i=0; i<requestGotten.length;i++){
                  result+=requestGotten[i].firstName + " " + requestGotten[i].lastName +"  " + requestGotten[i].email 
                  + "  " + requestGotten[i].phoneNumber +"  " + requestGotten[i].gender + "  " + requestGotten[i].location+ "\n";  
             }
             return res.status(200).send(result);
          }
      }catch (error) {
        console.log(error);
      }
  }
}) 
});




module.exports = router
