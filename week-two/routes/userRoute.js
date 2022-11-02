'use strict'

const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');

router.get('/', userController.getUsers);

router.get('/:userId', userController.getUser);

router.post('/',userController.createUser );

router.put('/', (req, res) => {
  res.send('From this endpoint you can put users.')
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete users.')
});


module.exports = router;