import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import { Express } from "express";

export default (app: Express): void => {
  app.use(cors());
  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};
