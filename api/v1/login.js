const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  const { email, password } = req.body;

  if (email === "suzi@example.com" && password === "123456") {
    const token = jwt.sign(
      { email: email },
      process.env.JWT_SECRET || "secreto",
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      token: token
    });
  }

  res.status(401).json({
    error: "Credenciales incorrectas"
  });
};
