//--------------------express--------------------
const express = require("express");
const app = express();
//--------------------passport--------------------
const passport = require('passport')

//--------------------cors---------------
const cors = require("cors");
const path=require("path")
//--------------------api--------------------
const student = require("./routes/api/student");
const tutor = require("./routes/api/tutor");
const user = require("./routes/api/user");

//--------------------Mongoose + DB configuration--------------------
require('dotenv').config();
var mongoose = require("mongoose");
//const db = require("./config/keys_dev").mongoURI;
// Connect to mongo
mongoose
  .connect(process.env.mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));


/*if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*',(req,res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'));

  })
}*/

//--------------------Init middleware--------------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//-----------------cors---------------
app.use(cors());

//--------------------Home Page--------------------
app.get("/", (req, res) => {
  res.send(`<h1>Home page</h1>
    <p> REGISTER OR SIGN UP <p>`);
});

//--------------------Direct routes to appropriate files--------------------
app.use("/api/student", student);
app.use("/api/tutor", tutor);
app.use("/api/user", user);

//--------------------Handling Error 404--------------------
app.use((req, res) => {
  res.status(404).send({ err: "We can not find what you are looking for" });
});



//--------------------Server--------------------
  const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server up and running on port ${port}`));
