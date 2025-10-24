
import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import routes from "./routes/index.routes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.engine("hbs", engine({ extname: ".hbs", layoutsDir: path.join(__dirname,"views/layouts"), defaultLayout: "main" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/public", express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "1mb", strict: false }));
app.use(cookieParser());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Ready on http://localhost:${PORT}`);
  console.log("N8N_WEBHOOK_URL:", process.env.N8N_WEBHOOK_URL);
});

export default app;
