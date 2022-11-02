'use strict'

const userModel = require("../models/userModel");

const users = userModel.users;

const getUsers = (req, res ) => {
    // remove the password property from all user items in the array
    users.map(user => {
        delete user.password;
        return user;
    });
    res.json(users);
};

const getUser = (req, res) => {
    const user = users.filter (user => req.params.userId == user.id)[0];
    if(user){
        delete user.password;
        res.json(user);
    }else {
        res.sendStatus(404);
    }
};

const modifyUser = () => {};
const createUser = () => {};
const deleteUser = () => {};


 module.exports = {
    getUsers,
    getUser,
    modifyUser,
    createUser,
    deleteUser

 };