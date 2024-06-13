require('dotenv').config();
const express = require('express');
const path = require("node:path");
const routes = require("./src/routes/routes.js");
const cors = require('./src/middlewares/cors');

console.log("###", process.env.PORT);
const app = express();
const port = process.env.PORT ?? 3000;

app.use('/', express.static('./src/public'));

app.use(cors);

routes(app);

app.listen(port, () => {
    console.log(`[${new Date().toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    })}] Server started on a port ${port}`)
})
