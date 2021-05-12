/**
 *  1. Create Express server
 *  2. Connect Mongo DB
 *  3. Initialise Express Server
 *  4. Initialise Express Middleware
 *  5. Create simple GET Request Route
 *  6. Inject Route
 *  7. Listen to App Connection
 */

const express = require("express");
const connectDb = require("./db");
require("dotenv").config();
const { PORT } = process.env;

// import Schema
const User = require("./models/user");

//connect db
connectDb();

//initialise express
const app = express();
//initialise express middleware
app.use(express.json({ extended: false }));

//Create route
app.get("/", (req, res) => res.json({ message: "Sample App Route" }));

// create new user
app.post("/user", (req, res) => {

  async function newUser(){
    try {
      const { name, email, country } = req.body;
      const newUser = new User({name: name, email: email, country: country });
      if(!newUsers){
        return res.status(500).json({message: "can NOT create new user at the moment"});
      }
      await newUser.save();
      res.status(200).json({message: 'new user created' , newUser});
  
  console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  }
  newUser();
  
});

// Get all Users
app.get('/all-users', (req, res) => {
    async function listAllUsers(){
      try {
        const allUsers = await User.find({});
        if(!allUsers){
          return res.status(500).json({message: "can NOT fetch data at the moment"});
        }
        res.status(200).json({message: "List of all Users", allUsers});
        
      } catch (error) {
        console.log(error);
      }
    
    }
    listAllUsers();
});

//find single user by name
app.post('/search-user', (req, res) => {
  async function searchUser() {
    const {name} = req.body;
  try {
    const searchResult = await User.findOne({name});
    if(!searchResult){
      return res.status(500).json({message:"NO user by that name"});
    }
    res.status(200).json(searchResult);
    // res.status(200).json(searchResult);
  } catch (error) {
    console.log(error);
  }
  }
  searchUser();
});

//find and update user
app.put("/update/:id", (req, res) => {
  async function updateUser(){
    const {id} = req.params;
    try {
    const {name, email, country} = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, {name, email, country} )
    if(!updatedUser){
      return res.status(500).json({message: "can NOT update user at the moment"});
    }
    await updatedUser.save();
    res.status(200).json({message: "User updated successfully",updatedUser});
      
    } catch (error) {
      console.log(error);
    }
    
  }
  updateUser();
})

//find user by id and delete
app.delete("/delete/:id", (req, res) => {
  async function deleteUser(){
    try {
      const {id} = req.params
      const deletedUser = await User.findByIdAndDelete(id);
      if(!deletedUser){
        return res.status(500).json({message: "can NOT delete user at the moment"});
      }
      res.status(200).json({message: "User successfully deleted"});
    } catch (error) {
      console.log(error);
    }
  }
  deleteUser()
})

// Create PORT
const port = process.env.PORT || PORT;

// Listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));
