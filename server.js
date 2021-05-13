/**
 *  1. Create Express server
 *  2. Connect Mongo DB
 *  3. Initialise Express Server
 *  4. Initialise Express Middleware
 *  5. Create CRUD Request Routes
 *  6. Inject Route
 *  7. Listen to App Connection
 */

const express = require("express");
const connectDb = require("./db");
require("dotenv").config();
const { PORT } = process.env;

//connect db
connectDb();

//initialise express
const app = express();
//initialise express middleware
app.use(express.json({ extended: false }));

// import Controllers
const userAccount = require('./controllers/userAccount');
const {newUser, listAllUsers, findUser, updateUser, deleteUser} = userAccount;

//@route  GET /
//@desc   List all Users route
//@access Public
app.get("/", listAllUsers);

//@route  POST /new-users
//@desc   create new user route
//@access Public
app.post("/new-user", newUser);

//@route  GET /find/:id
//@desc   find single user by id route
//@access Public
app.get('/find/:id', findUser);

//@route  PUT /update/:id
//@desc   update user by id route
//@access Public
app.put("/update/:id", updateUser)

//@route  DELETE /delete/:id
//@desc   delete user by id route
//@access Public
app.delete("/delete/:id", deleteUser)

//PORT
const port = process.env.PORT || 5000;

// Listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));
