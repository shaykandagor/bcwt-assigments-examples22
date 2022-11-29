"use strict";
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("dotenv").config();

const login = (req, res) => {
  // TODO: add passport authenticate
   passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user: user,
            });
        }
        req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }
           // generate a signed json web token with the contents of user object and return it in the response          
            const token = jwt.sign(user, process.env.JWT_SECRET);
            return res.json({user, token});
        });
    })(req, res);
};




module.exports = {
  login,

};