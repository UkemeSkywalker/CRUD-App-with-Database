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
const connectDb = require('./db');
require("dotenv").config();
const { PORT } = process.env;

//connect db
connectDb();

//initialise express
const app = express();
//initialise express middleware
app.use(express.json({ extended: false}));

//Create route
app.get("/", (req, res) => res.json({ message: "Sample App Route"}));

// Create PORT
const port = process.env.PORT || PORT;

// Listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));