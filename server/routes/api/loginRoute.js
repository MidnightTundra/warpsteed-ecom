const express = require('express');
const router = express.Router();

const userSchema = require("../../models/users.model");
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');

//Attempt to grab user data if logged in.
//Session token can be grabbed with cookies or local storage.
//auth returns true or false for log in.
router.get("/api/login", async (req, res) => {
    
});

router.post('/',userVerification)