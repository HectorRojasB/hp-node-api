import { Router } from "express";
import { readdirSync } from "fs";
import { cleanFileName } from "../utils/helpers";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((routeModule) => {
      console.log(`simon en ${cleanName}`);
      router.use(`/${cleanName}`, routeModule.router);
    });
  }
});

export { router };
