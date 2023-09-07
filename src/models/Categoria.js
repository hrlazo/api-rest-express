const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    imagenes: {
        type: String,
        required: true
    }
});

const Categoria = model("Categories", categorySchema);
module.exports = Categoria;