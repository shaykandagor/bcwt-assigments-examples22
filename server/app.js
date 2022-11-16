'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const catRouter = require('./routes/catRoute')
const userRouter = require('./routes/userRoute')

const port = 3000;

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application

//serve uploaded files
app.use(express.static('uploads'));

app.use('/cat', catRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
