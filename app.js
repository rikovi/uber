// app.js

const dotenv = require('dotenv');  // Import dotenv to load environment variables
dotenv.config();  // Load the environment variables from the .env file

const express = require('express');  // Import Express
const cors = require('cors');  // Import CORS middleware
const connectToDb = require('./db/db');  // Import the database connection function
const userRoutes = require('./routes/user.routes');
const app = express();  // Initialize the Express app
const cookieParser = require('cookie-parser');

connectToDb();  // Connect to the database using the function from db.js

app.use(cors());  // Use CORS to allow cross-origin requests
app.use(express.json());  // Parse incoming JSON data
app.use(express.urlencoded({extended: true}));
// Define a basic route to test if the server is running
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.use('/users',userRoutes);

module.exports = app;  // Export the app so it can be used in server.js
