//import {nanoid} from 'nanoid';
//import mongoose from 'mongoose';

const mongoose = require('mongoose');
const {ROLES} = require('../constants/index');


const Schema = mongoose.Schema;

//Schema for User Data
const userSchema = new Schema({
    username : {type: String, required: true, unique: true},
    pass : {type: String, required: true },
    firstName: {type: String},
    lastName: {type: String},
    shippingAddress: {type: String},
    email: {type: String, required: true},
    zipcode: {type: String},
    role: {
      type: String,
      default: ROLES.Customer,
      enum: [ROLES.Customer, ROLES.Admin]
    },
    created: {
        type: Date,
        default: Date.now
      }
    },{
  timestamps: true,
});


const user = mongoose.model('User', userSchema);


module.exports = user;