const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('we are connect mongoDB')
})


const itemsRouter = require('./routes/items');
//const usersRouter = require('./routes/users');

app.use('/items', itemsRouter)
//app.use('/users', usersRouter)


app.listen(port, (req, res) => {
    console.log(`we are connect to port ${port}`);
})