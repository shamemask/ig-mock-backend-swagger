const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Title',
      version: '1.0.0',
      description: 'API documentation',
    },
  },
  apis: ['./src/routes/*.js'], // Убедитесь, что путь соответствует вашим файлам маршрутов
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;



