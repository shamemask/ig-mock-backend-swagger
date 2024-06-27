const dotenv = require('dotenv');
const express = require('express');
const routes = require("./src/routes/routes.js");
const cors = require('./src/middlewares/cors');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig.js');

console.log("###", process.env.PORT);
const app = express();
const port = process.env.PORT ?? 3000;

app.use('/', express.static('./src/public'));

app.use(cors);

// Маршрут для Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


routes(app);

app.listen(port, () => {
    console.log(`[${new Date().toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    })}] Server started on a port ${port}`)
})

