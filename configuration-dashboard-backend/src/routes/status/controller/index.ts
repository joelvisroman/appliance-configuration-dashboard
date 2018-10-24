import { Request, Response } from "express";

function statusController(req: Request, res: Response) {
  res.send({
    status: "ok"
  });
}

export default statusController;
