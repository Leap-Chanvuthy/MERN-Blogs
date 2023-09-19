const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

// middlewares 
app.use(express.json());
app.use(cors);

//routes
app.get ('/' , (req , res) => {
    res.send('Hello');
})

mongoose.connect(process.env.DB_URI)
    .then(() => {
        app.listen(process.env.PORT , () => {
            console.log ('Database connected successfully');
        });
    })
    .catch ((error) => {
        console.log('It has been an error connected to the database');
    })