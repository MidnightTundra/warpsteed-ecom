const {ObjectId} = require('mongodb'); 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Schema for User Data
const categorySchema = new Schema({
    title : {type: String, required : true},
    image : {type: String, required: true},
    categoryLink : ObjectId(),
    created: {
        type: Date,
        default: Date.now
      }
    },{
  timestamps: true,
});


const category = mongoose.model('Category', categorySchema);


module.exports = category;