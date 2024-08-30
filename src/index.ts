import dotenv from "dotenv";
import express from "express";
import api from "./Api/Api";
import cookieParser from "cookie-parser"

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
app.use(cookieParser())

app.use(express.json());
app.use("/api/v1",api)
app.listen(port, () => {
  console.log("running on " + port + Date());
});
