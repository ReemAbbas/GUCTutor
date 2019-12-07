//--------------------express--------------------
const express = require('express');
const router = express.Router();

//--------------------models--------------------
const User = require('../../models/User');

//-------------------pathToSendFile----------------------------
var path = require('path');
const passport = require('passport')

//-------------------authentication----------------------------
require('dotenv').config();
var objectid = require("mongodb").ObjectID;
const jwt = require("jsonwebtoken");
var store = require("store");
const tokenKey = process.env.secretOrKey;

router.put("/request", async (req, res) => {
  jwt.verify(store.get("token"), tokenKey, async (err, authorizedData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      try {
        const course=req.body.course;
        const userID = objectid(authorizedData.id);
    
        const user= await User.findOneAndUpdate({'_id':userID},{"$push":{"courseTake":{"$each":[course]}}});
    
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

router.get("/getOffers/:course", async (req, res) => {
  jwt.verify(store.get("token"), tokenKey, async (err, authorizedData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      try {
        const course=req.params.course;
        const offersGotten= await User.find( { courseGive: { $all: [course] } } );
    
        if(!offersGotten || offersGotten.length==0){
            return res.status(400).json({ error: "There are currently no offers for this course!" });
          }else{
              var result=[];
              for(var i=0; i<offersGotten.length;i++){
                  result.push(offersGotten[i].firstName + " " + offersGotten[i].lastName +"  " + offersGotten[i].email 
                  + "  " + offersGotten[i].phoneNumber +"  " + offersGotten[i].gender + "  " + offersGotten[i].location);  
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
