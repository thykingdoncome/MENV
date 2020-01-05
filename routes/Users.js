const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const key = require('../config/keys').secret;

const router = express.Router();
const User = require('../models/User');
router.use(cors());
/**
 * @route Post users/register
 * @desc Register the user
 * @access Public
 */

process.env.SECRET_KEY = 'secret';

router.post('/register', (req, res) => {
    // const today = new Date()
    let {
        name,
        email,
        password,
        created
    } = req.body

    User.findOne({
        email: email
    })
    .then(user => {
        if(user) {
            return res.status(400).json({
                success: false,
                msg: 'user already exists'
            })
        }
    })
  //if user not found in db, create a new user instance 
    let newUser = new User({
      name,
      email,
      password,
      created
    });

    //using bcrypt to hash users password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
            .then(user => {
                return res.status(201).json({
                    success: true,
                    msg: `registration successful`
                })
            })
        })
    })
});

/**
 * @route Post users/login
 * @desc Login the user
 * @access Public
 */

router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(404).json({
                success: false,
                msg: `Incorrect Login details, User does not exist`
            });
        }

        // compare inputed password to existing database password
        bcrypt.compare(req.body.password, user.password)
        .then(isMatch => {
            if (isMatch) {

                // send token to user if password is correct
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    // password: user.password
                }
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        user: user,
                        msg: "User Login Successful."
                    });
                })
            } else {
                return res.status(404).json({
                    success: false,
                    msg: `Incorrect Login details, User does not exist`
                });
            }
        })
    });
});

/**
 * @route POST api/users/welcome
 * @desc Return the User's Data
 * @access Private
 */
router.get('/welcome', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});


module.exports = router;