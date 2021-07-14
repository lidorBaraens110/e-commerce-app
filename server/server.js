const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();
const router = require('./routes');

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// app.use(express.static('client/build'));
// const path = require('path')
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

const uri = process.env.ATLAS_URI

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log('connect mongo')).catch(err => console.log(err))

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('we are connect mongoDB')
})

app.use('/api', router);


app.listen(port, (req, res) => {
    console.log(`we are connect to port ${port}`);
})