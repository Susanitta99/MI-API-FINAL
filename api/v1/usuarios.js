// Importamos Mongoose para conectar con MongoDB Atlas.
const mongoose = require("mongoose");

// Importamos el modelo de Usuario.
const Usuario = require("./usuario");

// Cargamos las variables de entorno.
require("dotenv").config();

// Endpoint que devuelve la lista de usuarios.
async function handler(req, res) {
  try {
    // Conectamos con MongoDB Atlas.
    await mongoose.connect(process.env.MONGODB_URI);

    // Buscamos todos los usuarios de la base de datos.
    const usuarios = await Usuario.find();

    // Devolvemos la lista de usuarios en formato JSON.
    res.status(200).json(usuarios);
  } catch (error) {
    // Mostramos el error en los logs de Vercel.
    console.error(error);

    // Devolvemos un error si la conexión o consulta falla.
    res.status(500).json({
      error: "Error al obtener los usuarios"
    });
  }
}

// Exportamos la función que utilizará Vercel.
module.exports = handler;
