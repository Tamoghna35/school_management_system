import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env_access } from "./config/credentials.js";


const app = express();

app.use(cors({
    origin: env_access.CORS_ORIGIN,
    credentials: true
}))

app.use(cookieParser())
app.use(express.json({ limit: "150kb" }))
app.use(express.urlencoded({ limit: "150kb", extended: true }))

export {app}