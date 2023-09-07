const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.URI_MONGOOSE+process.env.BD_NAME);
    console.log('Conectado a la BD 👌');
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectToDatabase;