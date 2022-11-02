'use strict';
// catController
// How data is managed from data model

const catModel = require("../models/catModel");

const cats = catModel.cats;

const getCats = (req, res) => {
  res.json(cats);
};

const getCat = (req, res) => {
    // choose only one object with matching id
    const cat = cats.filter(cat => req.params.catId == cat.id)[0];
    if(cat) {
        res.json(cat);
    } else {
        res.sendStatus(404);
    }   
};
const createCat = (req, res) => {
  console.log(req.body);
  res.send('adding a cat');
};

const modifyCat = () => {};

const deleteCat = () => {};

module.exports = {
  getCat, 
  getCats,
  modifyCat,
  createCat,
  deleteCat
};
