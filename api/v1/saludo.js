module.exports = (req, res) => {
  const { nombre } = req.query;
  res.json({ mensaje: `Hola, ${nombre}!` });
};
