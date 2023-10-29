const {ObjectId} = require('mongodb'); 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Schema for Item Data
const itemSchema = new Schema({
    title : {type: String, required : true},
    price : {type: Number, required: true},
    images : [{type: String, required: true}],
    category : {type: String, required: true},
    subcategory : {type: String, required: true},
    created: {
        type: Date,
        default: Date.now
      }
    },{
  timestamps: true,
});


const item = mongoose.model('Items', itemSchema);


module.exports = item;