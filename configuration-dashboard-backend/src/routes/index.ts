import fs from "fs";
import { ServerRoute } from "hapi";
import { Server } from "tls";

const routesFolders = fs
  .readdirSync(__dirname)
  .filter(file => fs.lstatSync(`${__dirname}/${file}`).isDirectory());

const routes = routesFolders.reduce((prev: ServerRoute[], file) => {
  const route: [ServerRoute] = require(`${__dirname}/${file}`).default;
  return prev.concat(route);
}, []);

export default routes;
