const http = require('http');
const app = require('./app'); // Assuming app.js is in the 'src' folder

// Load environment variables from .env
require('dotenv').config();

const port = process.env.PORT || 3000; // Use the PORT from .env or default to 3000

const myserver = http.createServer(app); // Use the app exported from app.js

myserver.listen(port, () => {
    console.log(`Server started on port ${port}!`);
});
