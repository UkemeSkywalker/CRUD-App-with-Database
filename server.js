/**
 *  1. Create Express server
 *  2. Connect Mongo DB
 *  3. Initialise Express Server
 *  4. Initialise Express Middleware
 *  5. Create simple GET Request Route
 *  6. Inject Route
 *  7. Listen to App Connection
 */


const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const connectDb = require('./db');
const { PORT } = process.env;

//connect db
connectDb();

//initialise express
const app = express();
//initialise middlewares
app.use(express.json({ extended: false}));


//load User model
const User = require('./Models/User');


//@route POST /new-user
//@desc create new user data
//@access public
app.post("/new-user", (req, res) => {
  
  async () => {
    try {
      // check if user exist
      const user = await User.findOne({ email: req.body.email})
      if(user){
        return res.status(400).json({message: "User already exist"});
      }
      //create new user
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
        });
      
      newUser.save();
      await res.json(newUser);

    } catch (error) {
      console.log(error);
    }
  }
});



//@route Get /user
//@desc get user data
//@access public
app.get("/user", (req, res) => res.json({ message: "Welcome New User"}));


// Create PORT
const port = process.env.PORT || PORT;

// Listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));