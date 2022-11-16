'use strict';
// catRoute
const express = require('express');
const router = express.Router()
const mutler = require('multer');
const {body} = require('express-validator');
const catController = require('../controllers/catController');


const fileFilter = (req, file, cb) => {
  // The function should call 'cb' with a boolean
  // to indicate if the file should be accepted
  const acceptedTypes = ['images/jpeg', 'images/png', 'image/gif'];
  if(acceptedTypes.includes(file.mimetype)) {
    //To accept this file pass 'true' like so:
    cb(null, true);  
  }else{
    // To reject the file pass 'false', like so:
    cb(null, false)
  }
};

const upload = mutler({dest: 'uploads/', fileFilter});

router.get('/', catController.getCats)
    .get('/:catId', catController.getCat)
    .post('/',
      upload.single('cat') , 
      body('name').isAlphanumeric().trim().escape(),
      body('birthdate').isDate(),
      body('weight').isFloat({min: 0.1, max: 30}),
      body('owner').isInt({min: 1}),
     catController.createCat)
    .put('/', catController.modifyCat) // TODO: Add Validators
    .put('/:catId', catController.modifyCat) // TODO: Add Validators
    .delete('/:catId', catController.deleteCat);
 
module.exports = router;