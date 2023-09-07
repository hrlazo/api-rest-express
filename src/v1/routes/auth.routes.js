const express = require('express');
const router = express.Router();

const authController = require("../../controllers/authController.js");
const requireRefreshToken = require('../../middlewares/requireRefreshToken.js');
const { bodyLoginValidator, bodyRegisterValidator } = require('../../middlewares/validatorManager.js');

router
    .get("/refreshToken", requireRefreshToken,authController.refreshToken)
    .post("/login", bodyLoginValidator, authController.login)
    .post("/", bodyRegisterValidator, authController.register)
    .get("/logout", authController.logout)

module.exports = router;