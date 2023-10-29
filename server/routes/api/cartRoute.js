const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Item schema need to be a global reference in order to not throw a duplicate error
//const schema = new mongoose.Schema({"name" : String}, {"category" : String});//DEBUG ONLY DELETE LATER
//const Item = mongoose.model('items', schema);//SAME FOR THIS

const Cart = require('../../models/cart.model.js'); //IMPORTED CART MODEL

//Finds and returns cart items by based on the URL parameters.
router.get('/api/cart/getcart?:ownerid', async (req, res) => {  
    const ownerID = req.query.ownerid;
    const itemID = req.query.itemid;
    console.log(ownerID);
    let query = await Cart.find({"ownerId" : ownerID}).exec(); //findByID only needs the object id string
    res.send(query);
});

router.get('/api/cart/getcartitems?:itemid', async (req, res) => {
    const ownerID = req.query.ownerid;
    const itemID = req.query.itemid;
    console.log(itemID);
    let query = await Cart.find({"itemID" : itemID}).exec(); //findByID only needs the object id string
    res.send(query);
});

router.get('/api/cart/findCarts', async (req, res) => {
    const ownerID = req.query.ownerid;
    const itemID = req.query.itemid;
    console.log(itemID);
    let query = await Cart.find({}).exec(); //findByID only needs the object id string
    res.send(query);
});



module.exports = router;