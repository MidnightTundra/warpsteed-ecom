/*
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

import * as apiRoutes from './server/routes/api/loginRoute.js';

import dotenv from 'dotenv';

*/


const express = require('express');
const app = express();
const path = require('path');
const { default: mongoose } = require('mongoose');

//ROUTES
const cartRoute = require('./server/routes/api/cartRoute.js')
const itemRoute = require( './server/routes/api/itemRoute.js',
'./server/routes/api/loginRoute.js',
'./server/routes/api/signupRoute.js');

const createController = require('./server/controllers/createUserController.js');


//import App from '/front/src/App';



const port = 3000
// CONNECTS TO MONGOOSE DATABASE; WILL LINK TO CLOUD URI LATER FOR SUBMISSION
mongoose.connect('mongodb://127.0.0.1:27017/warpsteed-ecom-local', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

//Connects to application to port in env config file. 
app.listen(port, async () => {
  console.log(`app listening on port ${port}`);
});

//SET EVENT LISTENER ROUTES FOR APP TO USE
app.use(cartRoute);
app.use(itemRoute);


app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });

})

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'public', 'index.html'));
});
