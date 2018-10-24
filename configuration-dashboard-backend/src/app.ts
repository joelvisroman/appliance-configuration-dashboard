import express from "express";

const app = express();

// TODO: Remove, testing only
app.get("/", (req, res) => {
  res.send({
    status: "ok"
  });
});

export default app;
