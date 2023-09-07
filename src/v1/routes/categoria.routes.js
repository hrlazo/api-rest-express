const express = require('express');
const router = express.Router();
const categoriaController = require("../../controllers/categoriaController")


router
    .get("/", categoriaController.getAllCategorias )
    .post("/", categoriaController.createNewCategoria)
    .get("/:categoriaID", categoriaController.getCategoriaById)
    .patch("/:categoriaID", categoriaController.updateOneCategoria)
    .delete("/:categoriaID", categoriaController.deleteOneCategoria)


module.exports = router;