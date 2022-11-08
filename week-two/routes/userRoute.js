'use strict'

const express = require('express');
const router = express.Router();
const mutler = require('multer');
const userController = require ('../controllers/userController');

const upload = mutler({dest: 'uploads/'});

router.get('/', userController.getUsers);

router.get('/:userId', userController.getUser);

router.post('/', upload.single('user'), userController.createUser);

router.put('/', (req, res) => {
  res.send('From this endpoint you can edit/update users.')
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete users.')
});


module.exports = router;