//import {nanoid} from 'nanoid';
import { ObjectId } from 'mongoose';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Schema for User Data
const userSchema = new Schema({
    _id: new mongoose.type.ObjectId(),
    username : {type: String, required: true, unique: true},
    pass : {type: String, required: true },
    firstName: {type: String},
    lastName: {type: String},
    shipping_address: {type: String},
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


const user = mongoose.model('Users', userSchema);


module.exports = user;