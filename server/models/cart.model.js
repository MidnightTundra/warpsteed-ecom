const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    ownerId : {type: String, required : true},
    itemId : {type: String, required : true, unique: true},
    title : {type: String, required : true},
    price : {type: Number, required: true},
    image : {type: String, required: true},
    quantityInCart : {type: String, required: true},
    created: {
        type: Date,
        default: Date.now
      }
    },{
  timestamps: true,
});


const cart = mongoose.model('Cart', cartSchema);
module.exports = cart;