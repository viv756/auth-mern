import "dotenv/config"
import express from "express";
import connectToDatabase from "./config/db";
import { NODE_ENV, PORT } from "./constants/env";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
  });
});

app.listen(4004, () => {
  console.log(`server is running ${PORT} ${NODE_ENV} environment`);
  connectToDatabase()
});
