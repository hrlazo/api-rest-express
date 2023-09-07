const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
        type: Schema.Types.ObjetcId,
        ref: 'Categoria',
        require: true
    },
    imagenes: {
        type: [String],
        required: true
    },
});

const Producto = model("Products", productSchema);

module.exports = Producto;