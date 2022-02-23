import { Router } from "express";
import { CompanyController } from "../controllers/CompanyController";

export const companyRouter = Router();

const controller = new CompanyController;

companyRouter.get("/", controller.getAll);

// TODO: make it protected route only accessed by admin
companyRouter.post("/", controller.postOne);
