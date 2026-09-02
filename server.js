const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

// Importar handlers
const hello = require("./api/v1/hello");
const saludo = require("./api/v1/saludo");
const login = require("./api/v1/login");
const usuarios = require("./api/v1/usuarios");
const swagger = require("./api/v1/swagger");

// Registrar rutas
app.get("/api/v1/hello", hello);
app.get("/api/v1/saludo", saludo);
app.post("/api/v1/login", login);
app.get("/api/v1/usuarios", usuarios);
app.get("/api/v1/swagger", swagger);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
