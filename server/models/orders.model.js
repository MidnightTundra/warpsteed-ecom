import { ObjectId } from 'mongoose';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Schema for User Data
const itemSchema = new Schema({
    _id: new mongoose.type.ObjectId(),
    title : {type: String, required : true},
    price : {type: Number, required: true},
    image : [{type: String, required: true}],
    desc : {type: String},
    condition : {type: String, required : true},
  
    created: {
        type: Date,
        default: Date.now
      }
    },{
  timestamps: true,
});


const item = mongoose.model('Items', itemSchema);


module.exports = item;