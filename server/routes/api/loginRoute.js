const express = require('express');
const router = express.Router();

const userSchema = require("../../models/users.model");
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');
const loginController = require("../../controllers/loginController")

//Attempt to grab user data if logged in.
//Session token can be grabbed with cookies or local storage.
//auth returns true or false for log in.
router.post("/api/login", async (req, res) => {
    loginController(req, res);
});

router.post('/',userVerification);

module.exports = router;