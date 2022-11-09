'use strict'

const express = require('express');
const router = express.Router();
const mutler = require('multer');
const userController = require ('../controllers/userController');

const upload = mutler({dest: 'uploads/'});

router.get('/', userController.getUsers)
 .get('/:userId', userController.getUser)
 .post('/', upload.single('user'), userController.createUser)
 .put('/', userController.modifyUser)
 .put('/:userId', userController.modifyUser)
 .delete('/:userId', userController.deleteUser);

module.exports = router;