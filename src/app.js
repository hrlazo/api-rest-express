// Bases
require('dotenv').config();
const conn = require('./database/connect.js');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();
conn();

// Routers
const v1ProductoRouter = require("./v1/routes/producto.routes.js")
const v1CategoriaRouter = require("./v1/routes/categoria.routes.js")
const v1UsuarioRouter = require("./v1/routes/usuario.routes.js")
const v1AuthRouter = require("./v1/routes/auth.routes.js")
const v1LinkRouter = require("./v1/routes/link.routes.js")

// Dominios Permitidos
whitelist = [process.env.ORIGIN1, process.env.ORIGIN2]

// Middlewares
app.use(cors({
  origin: function(origin, callback){
    if(!origin || whitelist.includes(origin)){
      return callback(null, origin);
    }
    return callback("Error de Cors originL: " + origin + " No autorizado!")
  }
}))
app.use(express.json());
app.use(cookieParser());


// Links
app.use("/api/v1/productos", v1ProductoRouter);
app.use("/api/v1/categorias", v1CategoriaRouter);
app.use("/api/v1/usuarios", v1UsuarioRouter);
app.use("/api/v1/autentificacion", v1AuthRouter);
app.use("/api/v1/links", v1LinkRouter);

const PUERTO = process.env.PORT;


// 404
app.use((req, res, next) => {
    res.status(404).send('No se ha encontrado. 404');
  });

// Documentacion
app.use(express.static("public"));

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto: http://localhost:${PUERTO} 🚀`);
});

module.exports = app;