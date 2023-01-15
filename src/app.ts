import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(router);
app.listen(PORT, () => console.log("up and running!"));
