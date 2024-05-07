import express from 'express'
import path from "node:path";
import {routes} from "./src/routes/routes.js";

console.log("###", process.env.PORT)
const app = express()
const port = process.env.PORT ?? 3000

app.use(express.static(path.join('public')));

routes(app);

app.listen(port, () => {
    console.log(`[${new Date().toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    })}] Server started on a port ${port}`)
})
