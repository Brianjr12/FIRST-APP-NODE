import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import routers from "./routes/routes.js";
import colors from "colors";

const app = express();
const port = 3000;
//* creating the absolute path
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
//* connecting the routes
app.use(routers);
app.use(express.static(join(__dirname, "public")))
//* running the server
app.listen(port);
console.log(`server is listening on port ${port}`.blue);
