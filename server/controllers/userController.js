'use strict'
//userController
// How data is managed from data model

const userModel = require("../models/userModel");
const {validationResult} = require('express-validator');

const getUsers = async (req, res ) => {
    const users = await userModel.getAllUsers(res)
    res.json(users);
    
};

const getUser = async (req, res) => {
    const user = await userModel.getUserById(req.params.userId, res);
    if(user){
        res.json(user);
    }else {
        res.sendStatus(404);
    }
};

const createUser = async (req, res) => {
    console.log('Creating new user: ', req.body);
    const newUser = req.body;
    if (!newUser.role) {
        //default user role (normal user)
        newUser.role = 1;
    }
    const errors = validationResult(req);
    console.log('validation errors', errors);
    if (errors.isEmpty()) {
        const result = await userModel.addUser(newUser, res);
        res.status(201).json({message: 'user created', userId: result});
    } else {
        res.status(400).json({
            message: 'user creation failed', 
            errors: errors.array()
        });
    }
};


const modifyUser = async(req, res) => {
  const user = req.body;
  if(req.params.userId) {
    user.id = req.params.userId;
  }
  const result = await userModel.updateUserById(user, res);
  if(result.affectedRows > 0){
    res.json({message: 'User modified ' + user.id});
  }else {
    res.status(404).json({message: 'Nothing changed'});
  }
};

const deleteUser = async (req, res) => {
  const result = await userModel.deleteUserById(req.params.userId, res);
  console.log('user deleted', result);
  if(result.affectedRows > 0){
    res.json({message: 'User deleted'});
  }else {
    res.status(404).json({message: 'User was already deleted'});
  }
};



module.exports = {
    getUsers,
    getUser,
    modifyUser,
    createUser,
    deleteUser

 };