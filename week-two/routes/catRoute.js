'use strict';
// catRoute
const express = require('express');
const router = express.Router()
const mutler = require('multer');
const catController = require('../controllers/catController');

const upload = mutler({dest: 'uploads/'});

router.get('/', catController.getCats)
  .get('/:catId', catController.getCat)
  .post('/', upload.single('cat') , catController.createCat)
  .put('/', catController.modifyCat)
  .put('/:catId', catController.modifyCat)
  .delete('/:catId', catController.deleteCat);

module.exports = router;