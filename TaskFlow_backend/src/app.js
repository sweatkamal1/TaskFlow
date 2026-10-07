import route from "./routes/test.route.js"
import routes from "./routes/user.route.js"
import express from "express"


const app = express();

const apiprefix = "/api/v1"

app.use( apiprefix, route)
app.use(apiprefix, routes)

export default app;