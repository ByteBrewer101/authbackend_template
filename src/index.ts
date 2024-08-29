import dotenv from "dotenv";
import express from "express";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get("/testing", (req, res) => {
  return res.json({
    msg: "hello",
  });
});

app.listen(port, () => {
  console.log("running on " + port + Date());
});
