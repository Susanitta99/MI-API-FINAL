// Endpoint que devuelve un mensaje de bienvenida en formato JSON.
module.exports = (req, res) => {
  // Se envía el mensaje "Hola Mundo" como respuesta.
  res.json({ mensaje: "Hola Mundo Bonito" });
};
