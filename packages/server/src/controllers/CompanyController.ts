import { Company } from "../models/company";
import mongoose from "mongoose";
import { Response } from "express";

export class CompanyController {
  getAll(req: any, res: any) {
    Company.find()
      .exec()
      .then((docs) => {
        res.status(200).json({
          message: "Fetched data",
          companies: docs,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({
          message: "error happen",
        });
      });
  }

  postOne(req: any, res: any) {
    console.log(req.body);
    const company = new Company({
      _id: new mongoose.Types.ObjectId(),
      ticker: req.body.ticker,
      companyName: req.body.companyName,
    });
    company
      .save()
      .then((result:any) => {
        res.status(201).json({ result: result, input: company });
      })
      .catch((err: Error) => res.status(500).json({ message: err }));
  }

  // postMany(req: Response, res: Response)
}
