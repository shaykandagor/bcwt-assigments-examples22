'use strict';
// catRoute
const express = require('express');
const router = express.Router()
const mutler = require('multer');
const catController = require('../controllers/catController');

const upload = mutler({dest: 'uploads/'});




router.get('/', catController.getCats);

router.get('/:catId', catController.getCat);

router.post('/', upload.single('cat') ,catController.createCat);

router.put('/', (req, res) => {
  res.send('From this endpoint you can put cats.')
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete cats.')
});

module.exports = router;