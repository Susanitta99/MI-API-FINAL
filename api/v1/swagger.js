const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load(__dirname + "/swagger-config.yaml");

module.exports = (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Documentación de MI API FINAL</title>
      </head>
      <body>
        <h1>Documentación de MI API FINAL</h1>
        <p>La documentación Swagger está configurada correctamente.</p>
        <pre>${JSON.stringify(swaggerDocument, null, 2)}</pre>
      </body>
    </html>
  `);
};
