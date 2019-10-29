const express = require('express');
const authRoute = require('./src/routers/authRoute');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('db connected !');
});

app.use(express.json());
app.use('/api/user', authRoute)

app.listen(3000, () => {
    console.log("Server up and running...")
})



