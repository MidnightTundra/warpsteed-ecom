const { createNewUser } = require("../Controllers/createUserController.js");
const router = require("express").Router();

router.post("/api/signup", createNewUser);

module.exports = router;