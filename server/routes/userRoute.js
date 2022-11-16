'use strict'

const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require ('../controllers/userController');

router.get('/', userController.getUsers)
  .get('/:userId', userController.getUser)
  .post('/', 
    body('name').isLength({min: 3}).trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('passwd').isLength({min: 8}).trim(),
    userController.createUser)
  .put('/', userController.modifyUser) //TODO: add validators
  .put('/:userId', userController.modifyUser)
  .delete('/:userId', userController.deleteUser) //TODO: add validators


module.exports = router;