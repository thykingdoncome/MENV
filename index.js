const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const path = require('path');
const passport = require('passport');

//initialize app
const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(passport.initialize());
//fething jwtStategy [global]
require('./config/passport')(passport);

//setting up static directory
app.use(express.static(path.join(__dirname, 'public')));

//setting up database
const mongo = require('./config/keys').mongoUrl;

mongoose.connect(mongo, { useNewUrlParser: true })
    .then(() => console.log(`MongoDB connected ${mongo}`))
    .catch(err => console.log(`unable to connect to db ${err}`))

//bring in Users route
const Users = require("./routes/Users");
app.use('/users', Users);

// app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

// set up port
const PORT = process.env.PORT || 3000;

// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));