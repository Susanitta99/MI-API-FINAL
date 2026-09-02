const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Usuario = require("./usuario");

require("dotenv").config();

async function handler(req, res) {

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Token no proporcionado"
    });
  }

  const token = authHeader.split(" ")[1];

  try {

    jwt.verify(
      token,
      process.env.JWT_SECRET || "secreto"
    );

    await mongoose.connect(process.env.MONGODB_URI);

    const usuarios = await Usuario.find();

    res.status(200).json(usuarios);

  } catch (error) {

    console.error(error);

    res.status(401).json({
      error: "Token inválido"
    });
  }
}

module.exports = handler;
