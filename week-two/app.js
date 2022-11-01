'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.get('/cat', (req, res) => {
   console.log(req);
  res.send('From this endpoint you can get cats.')
});

app.get('/cat/:catId', (req, res) => {
  // console.log(req.params);
  res.send('From this endpoint you can get cat with Id' + req.params.catId);
});

app.post('/cat', (req, res) => {
  res.send('From this endpoint you can add more cats.');
});

app.put('/cat', (req, res) => {
  res.send('From this endpoint you can put cats.')
});

app.delete('/cat', (req, res) => {
  res.send('From this endpoint you can delete cats.')
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
