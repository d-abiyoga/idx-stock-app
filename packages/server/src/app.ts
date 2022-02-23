import "dotenv/config";
import express from "express";
import { companyRouter } from "./routes/stock";
import setupMiddlewares from "./config/middlewares";

export function createApp(database: any) {
  const connection = database();
  const app = express();
  setupMiddlewares(app);

  // Router
  app.use("/company", companyRouter);
  app.get("/", (req, res) => {
    res.status(200).json({ foo: "ts-bar has been changed" });
  });

  return app;
}
