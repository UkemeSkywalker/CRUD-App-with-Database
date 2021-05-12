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
  const { name, email, country } = req.body;
  const newUser = new User({
    name: name,
    email: email,
    country: country,
  });
  if (!newUser) {
    return res.status();
  }
});

// Create PORT
const port = process.env.PORT || PORT;

// Listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));
