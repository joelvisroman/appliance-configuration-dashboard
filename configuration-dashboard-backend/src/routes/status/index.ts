import { ServerRoute } from "hapi";
import statusHandler from "../../handlers/status";

const routes: [ServerRoute] = [
  {
    path: "/status",
    method: "GET",
    handler: statusHandler
  }
];

export default routes;
