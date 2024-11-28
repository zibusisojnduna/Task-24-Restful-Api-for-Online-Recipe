const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3000

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
    userNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.get("/", (req, res) => {
    res.send("Recipe API")
})









app.listen(port, () => {
    console.log(`Server is running on http:/localhost:${port}`)
})