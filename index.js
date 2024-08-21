const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./config/index");
const router = require("./routes");

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("server running");
  });
});
