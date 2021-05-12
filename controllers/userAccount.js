//Load Model

const User = require("../models/user");

class userAccount {

  // Create new User
  static async  newUser(req, res){
    try {
      const { name, email, country } = req.body;
      const newUser = new User({name: name, email: email, country: country });
      if(!newUser){
        return res.status(500).json({message: "can NOT create new user at the moment"});
      }
      await newUser.save();
      res.status(200).json({message: 'new user created' , newUser});
  
  console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  }

  // Show all Users
  static async listAllUsers(req, res){
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

  // find user by Id
  static async findUser(req, res) {
    const {id} = req.params;
    try {
      const findResult = await User.findById(id);
      if(!findResult){
        return res.status(500).json({message:"NO user by that name"});
      }
      res.status(200).json(findResult);
    } catch (error) {
      console.log(error);
    }
  }

  //Update user by Id
  static async  updateUser(req, res){
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

  // Delete user by Id
  static async deleteUser(req, res){
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
 

}



module.exports = userAccount;