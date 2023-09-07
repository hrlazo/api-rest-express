const express = require('express');
const router = express.Router();

const linkController = require("../../controllers/linkController.js");
const requireToken = require('../../middlewares/requireToken.js');
const { bodyLinkValidator, paramLinkValidator } = require('../../middlewares/validatorManager.js');

router
    .get("/", requireToken ,linkController.getAllLinks)
    .get("/:id", requireToken,linkController.getLinkById)
    .post("/", requireToken, bodyLinkValidator, linkController.createLink)
    .patch("/:id", requireToken, bodyLinkValidator, paramLinkValidator, linkController.updateLink)
    .delete("/:id", requireToken, paramLinkValidator,linkController.deleteLink)

module.exports = router;