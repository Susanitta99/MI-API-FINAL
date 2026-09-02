const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load(__dirname + "/swagger-config.yaml");

module.exports = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerDocument)
};
