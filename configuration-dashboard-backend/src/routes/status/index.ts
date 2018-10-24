import { Router } from "express";
import statusController from "./controller";

const status = Router();

status.get("/", statusController);

export default status;
