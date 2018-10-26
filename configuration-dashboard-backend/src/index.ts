import hapi from "hapi";
import fs from "fs";

import routes from "./routes";

// TODO: parametrize
const server = new hapi.Server({
  host: "localhost",
  port: "3000"
});

(async () => {
  server.route(routes);

  // TODO: add propper logging
  await server.start();
  console.log("Server running");
})();

export default server;
