import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
  });
});

app.listen(4004, () => {
  console.log("server is running");
});
