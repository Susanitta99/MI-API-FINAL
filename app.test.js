const request = require("supertest");
const express = require("express");

const app = express();

app.use(express.json());

const hello = require("./api/v1/hello");
const saludo = require("./api/v1/saludo");
const login = require("./api/v1/login");

app.get("/api/v1/hello", hello);
app.get("/api/v1/saludo", saludo);
app.post("/api/v1/login", login);

describe("API MI-API-FINAL", () => {

  test("GET /api/v1/hello devuelve un saludo", async () => {
    const response = await request(app)
      .get("/api/v1/hello");

    expect(response.statusCode).toBe(200);
    expect(response.body.mensaje).toBe("Hola Mundo Bonito");
  });

  test("GET /api/v1/saludo devuelve un saludo personalizado", async () => {
    const response = await request(app)
      .get("/api/v1/saludo?nombre=Suzi");

    expect(response.statusCode).toBe(200);
    expect(response.body.mensaje).toBe("Hola, Suzi!");
  });

  test("POST /api/v1/login devuelve un token JWT con credenciales válidas", async () => {
    const response = await request(app)
      .post("/api/v1/login")
      .send({
        email: "suzi@example.com",
        password: "123456"
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  test("POST /api/v1/login rechaza credenciales incorrectas", async () => {
    const response = await request(app)
      .post("/api/v1/login")
      .send({
        email: "incorrecto@example.com",
        password: "incorrecta"
      });

    expect(response.statusCode).toBe(401);
  });

});
