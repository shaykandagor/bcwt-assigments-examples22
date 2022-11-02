'use strict';
const express = require('express');
const app = express();
const catRouter = require('./routes/catRoute');
const userRouter = require('./routes/userRoute');

const port = 3000;

app.use('/cat', catRouter);
app.use('/user', userRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
