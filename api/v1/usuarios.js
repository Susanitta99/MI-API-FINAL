// Importamos Mongoose para conectar con MongoDB Atlas.
const mongoose = require("mongoose");

// Importamos el modelo de Usuario.
const Usuario = require("./usuario");

// Cargamos las variables de entorno.
require("dotenv").config();

// Endpoint que devuelve la lista de usuarios.
module.exports = async (req, res) => {
  try {
    // Conectamos con MongoDB Atlas.
    await mongoose.connect(process.env.MONGODB_URI);

    // Buscamos todos los usuarios de la base de datos.
    const usuarios = await Usuario.find();

    // Devolvemos la lista de usuarios en formato JSON.
    res.json(usuarios);
  } catch (error) {
    // Devolvemos un error si la conexión o consulta falla.
    res.status(500).json({
      error: "Error al obtener los usuarios"
    });
  }
};
