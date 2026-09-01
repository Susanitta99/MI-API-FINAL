// Importamos Mongoose para definir el modelo de usuario.
const mongoose = require("mongoose");

// Definimos la estructura de los usuarios.
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

// Exportamos el modelo Usuario.
module.exports = mongoose.model("Usuario", usuarioSchema);
