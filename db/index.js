/**
 *  1. Create a connection for mongodb
 *  2. Start connection to mongodb sever
 */

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const dbConnectString = process.env.MONGO_URI;

// create connection
const connectDB = async () => {
  try {
    await  mongoose.connect(dbConnectString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log("mongodb connected")
    
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

}

module.exports = connectDB;