const router = require('express').Router();
const userSchemaRoute = require('../models/users.model.js');
const bcrypt = require('bcrypt');


const createNewUser = async (req, res) => {
    
}
    // Defines our starting point 
router.route('/').get((req,res) => {
    userSchemaRoute.find().then(userdata => res.json(userdata))
    .catch(err =>   res.status(400).json('Error in retrieving data. Error code: ' + err))
});

//Creates a new entry to the database for user data based on the Schema fields.
//This setup is for users.
router.route('/add').post((req, res) => {
    const userID = req.body.userID;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const zipcode = req.body.zipcode;

    const newUser = new userSchemaRoute ({
        userID, firstName, lastName, address, zipcode,
        
    });
    
    newUser.save()
        .then(() => res.json('data entry added'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;    