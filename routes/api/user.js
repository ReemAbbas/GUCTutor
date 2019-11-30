//--------------------express--------------------
const express = require('express');
const router = express.Router();

//--------------------models--------------------
const User = require('../../models/User');

//-------------------pathToSendFile----------------------------
var path = require('path');
const passport = require('passport')

const bcrypt = require("bcryptjs");
const validator = require("../../Validations/validations");

//-------------------authentication----------------------------
const jwt = require("jsonwebtoken");
const tokenKey = require("../../config/keys").secretOrKey;
var store = require("store");
var objectid = require("mongodb").ObjectID;

router.post("/register", async (req, res) => {
  const {
    firstName,
    lastName,
    password,
    email,
    phoneNumber,
    GUCID,
    gender,
    location
  } = req.body;

  const isValidated = validator.createAccountValidation(req.body);

  if (isValidated.error)
    return res
      .status(400)
      .send({ error: isValidated.error.details[0].message });

  const user = await User.findOne({ email });

  if (user) return res.status(400).json({ error: "Email already exists" });

  const salt = bcrypt.genSaltSync(10);

  const hashedPassword = bcrypt.hashSync(password, salt);

  const newUser = new User({
    firstName,
    lastName,
    password: hashedPassword,
    email,
    phoneNumber,
    GUCID,
    gender,
    location,
    courseTake:[],
    courseGive:[],
    requests:[],
    offers:[],
    notifications:[]
   
  });

  newUser.save().then(user => res.json({ data: user }))
  .catch(err => res.json({ error: "Can not create user" }));
});

router.post("/login", async (req, res) => {
    try{
      const email=req.body.email;
      const password=req.body.password;
  
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ msg: "Email does not exist" });
      const match = bcrypt.compareSync(password, user.password);
  
      if (match) {
        const payload = {id: user._id, email: user.email};
  
        const token = jwt.sign(payload, tokenKey, { expiresIn: "1h" });
        store.set("token", token);
        res.json({ token: `Bearer ${token}` });
      } else
         return res.status(400).send({ password: "Wrong password" });
    }catch(e){}
    
});

router.get("/logout", async (req, res) => {
  store.remove("token");
  res.send("Logged out");
});

router.put("/editAccount",async(req,res) =>{
  jwt.verify(store.get("token"), tokenKey, async (err, authorizedData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      try {
        const firstName= req.body.firstName;
        const lastName=req.body.lastName;
        const password= req.body.password;
        const email=req.body.email;
        const phoneNumber= req.body.phoneNumber;
        const GUCID=req.body.GUCID;
        const gender= req.body.gender;
        const location=req.body.location;

        const userID = objectid(authorizedData.id);

        if(!(!firstName || firstName.length==0 || firstName.localeCompare(null)==0))
            await User.updateOne({"_id":userID}, {$set:{"firstName":firstName}})
        if(!(!lastName || lastName.length==0 || lastName.localeCompare(null)==0))
            await User.updateOne({"_id":userID}, {$set:{"lastName":lastName}})
        if(!(!password || password.length==0 || password.localeCompare(null)==0)){
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);
            await User.updateOne({"_id":userID}, {$set:{"password":hashedPassword}})
        }
        if(!(!email || email.length==0 || email.localeCompare(null)==0))
            await User.updateOne({"_id":userID}, {$set:{"email":email}})
        if(!(!phoneNumber || phoneNumber.length==0 || phoneNumber.localeCompare(null)==0))
            await User.updateOne({"_id":userID}, {$set:{"phoneNumber":phoneNumber}})
        if(!(!GUCID || GUCID.length==0 || GUCID.localeCompare(null)==0))
            await User.updateOne({"_id":userID}, {$set:{"GUCID":GUCID}})
        if(!(!gender || gender.length==0 || gender.localeCompare(null)==0))
            await User.updateOne({"_id":userID}, {$set:{"gender":gender}})
        if(!(!location || location.length==0 || location.localeCompare(null)==0))
            await User.updateOne({"_id":userID}, {$set:{"location":location}})

        return res.status(200).json({ msg: "Account updated successfully" });

  } catch (error) {
    console.log(error);
  }
}
  })
});
module.exports = router