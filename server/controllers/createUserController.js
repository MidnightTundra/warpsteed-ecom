const { ROLES } = require("../constants/index.js");
const User = require("../models/users.model.js");
const { createSecretToken } = require("../util/secretToken.js");
const bcrypt = require('bcrypt');

const createNewUser = async (req, res) => {
    //Search the JSON request for the password and username
    const {username, pass, email} = req.body;
    if(!username || pass || email) return (res.status(400).json({message: "Username or password is not valid."}));
    
    //Checks for duplicate attempted entries in the database.
    const checkDuplicateName = await User.findOne({email : this.username}).exec();
    if(checkDuplicate) return (res.status(409).json({message: "Username is already taken."}));

    //Checks for duplicate email entries as well
    const checkDuplicateEmail = await User.findOne({username : this.email}).exec();
    if(checkDuplicateName && checkDuplicateEmail) return (res.status(409).json({message: "Email address is already taken."}));

    //Attempt to store new user into the database
    try{
        const hashedPass = passwordHash(pass, 15);

        // Form JSON object to store new user.
        const result = User.create({
            "username" : username,
            "role" : ROLES.Customer,
            "pass" : hashedPass

        });

        console.log(result);

        res.status(200).json({'success' : `New user created: ${user}`});

        //Attempt to create a jwt for the current user session sign up and automatic login
        try {
            
            const token = createSecretToken(result._id);
            res.cookie("token", token, {
              withCredentials: true,
              httpOnly: false,
            });
            res
              .status(201)
              .json({ message: "User signed in successfully", success: true, user });
        } catch (error) {
            console.error(error);
        }
    }catch(err) {
        console.error(error);
    }

}

module.exports = {createNewUser};   

// Encryption function to to hash passwords and other important user data to the database
function passwordHash (pass, saltRounds) {
    return bcrypt.hash(pass, saltRounds, function(err, hash) {
        try {
            return hash;
        } catch(err) {
            return err;
        }
    });
}



/*
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

*/