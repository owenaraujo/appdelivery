import express from 'express'
import cors from "cors";
import morgan from "morgan";
import pkg from "../../package.json";
import extend from "express-ejs-extend";
import path from "path";

const app = express();
import index from '../routes/index'
import auth from '../routes/auth'
app.use(cors());


app.set("info", pkg);
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("ejs", extend);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(morgan("dev"));
app.set("port", process.env.PORT || 3000);
app.use('/', index)
app.use('/auth', auth)

export default app;
