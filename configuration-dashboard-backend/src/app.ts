import express from "express";

import { status } from "./routes";

const app = express();

app.use("/status", status);

export default app;
