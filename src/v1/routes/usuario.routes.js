const express = require('express');
const router = express.Router();

const usuarioController = require("../../controllers/usuarioController.js");
const requireToken  = require('../../middlewares/requireToken.js');
const { bodyRegisteValidator } = require('../../middlewares/validatorManager.js');

router
    .get("/", usuarioController.getAllUsuarios)
    .get("/:usuarioId", requireToken, usuarioController.getUsuarioById)
    .patch("/:usuarioId", usuarioController.updateOneUsuario)
    .delete("/:usuarioId", usuarioController.deleteOneUsuario)

module.exports = router;