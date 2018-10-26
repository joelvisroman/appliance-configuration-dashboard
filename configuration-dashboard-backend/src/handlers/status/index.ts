import { Request, ResponseToolkit } from "hapi";

import status from "../../models/status";

async function statusHandler(request: Request, h: ResponseToolkit) {
  const response = await status();
  return {
    status: response
  };
}

export default statusHandler;
