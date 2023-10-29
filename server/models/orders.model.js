
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Schema for Order Data
const orderSchema = new Schema({
    customerID : {type: String, required : true},
    shippingStatus : {type: String, required: true},
    shippedItems : [{
      itemID : {type: String},
      title : {type : String},
      quantity : {type: Number}
    }],
    eta : {type: Date, default : new Date().getTime()+(5*24*60*60*1000)}, // DEFAULTS 5 DAYS FROM ORDER CREATION
    created: {
        type: Date,
        default: Date.now
      }
    },{
  timestamps: true,
});


const order = mongoose.model('order', orderSchema);


module.exports = order;