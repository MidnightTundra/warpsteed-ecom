const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Item schema need to be a global reference in order to not throw a duplicate error
//const schema = new mongoose.Schema({"name" : String}, {"category" : String});//DEBUG ONLY DELETE LATER
//const Item = mongoose.model('items', schema);//SAME FOR THIS

const Item = require('../../models/items.model'); //IMPORTED ITEM MODEL

//Finds and returns items by category based on the URL parameters.
router.get('/api/items/findcat?:cat', async (req, res) => {
    const categoryTitle = req.query.cat;
    console.log(categoryTitle);
    let query = await Item.find({"category" : {$regex: categoryTitle, $options: 'i'}}).exec(); //findByID only needs the object id string
    res.send(query[0]);
    //console.log(query);
});

//Find one item by ID and return it to the initializer.
router.get('/api/items/findid?:id', async (req, res) => {
    const item_id = req.query.id;
    /*
    http://localhost:3000/api/items/findid?id=653a0bcae1e7db9eace5e487
    Try this URL with the block of code below. The Schema needs to be referenced to a model.
    The model name has to be the same name as the collection.
    */
    let query = await Item.findById(item_id); //findByID only needs the object id string
    res.send(query);
    console.log(query);
});

//Finds items by name
router.get('/api/items/findtitle?:title', async (req, res) => {
    const itemName = req.query.title;
    let query = await Item.find({"title" : {$regex: itemName, $options: 'i'}}); 
    res.send(query);
    console.log(query);
});

//Finds items by name
router.get('/api/items/findAll', async (req, res) => {
    let query = await Item.find({}); 
    res.send(query);
    console.log(query);
});



module.exports = router;