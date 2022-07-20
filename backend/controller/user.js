const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

const Users = require("../models/userModel");


module.exports.getAllUser = (req, res) => {
    Users.find().then((users) => res.json(users));
};


module.exports.getUser = (req, res) => {
	Users
		.find({ email: req.params.email })
		.then((info) => res.json(info))
		.catch((err) => res.status(404).json({ error: "unable to find info" }));
};



module.exports.editUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Users.find({email : email})
  .then((info) => {
    info[0].password = req.body.password;
    
    const result = info[0]
      .save()
      .then(() => {
        console.log("Password updated.");
      })
      .catch(() => {
        console.log("Password updation failed!");
      });

    res.json(result);
  })

};

// @route POST api/users/register
// @desc Register user
// @access Public
module.exports.addUser = (req, res) => {
  
    Users.findOne({ email: req.body.email }).then(user => {
        if (user) {
          return res.status(400).json({ email: "Email already exists" });

        } else {
          const newUser = new Users({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
          });
    // Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
          });
        }
      });
}

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
module.exports.login = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    Users.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }


    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload

        const payload = {
          id: user.id,
          name: user.name
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
          
            return res.
            status(200).json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
}

//references for login and register
//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669