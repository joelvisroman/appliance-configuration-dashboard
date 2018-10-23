import express from "express";

const app = express();

// TODO: Remove, testing only
app.get("/", (req, res) => {
  res.send({
    status: "ok"
  });
});

// TODO: parametrize port
app.listen(3000, () => {
  console.log("listening in port 3000");
});
