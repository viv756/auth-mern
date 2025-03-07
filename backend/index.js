import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";

const app = express();
dotenv.config();

connectDb();


app.listen(3000, () => {
  console.log("server is runnig");
  
})