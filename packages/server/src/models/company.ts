import { Schema, model } from "mongoose";

const companySchema = new Schema({
  _id: Schema.Types.ObjectId,
  ticker: { type: String, required: true, uppercase: true, match: /[A-Za-z]{4}/ },
  companyName: { type: String, required: true },
});

export const Company = model("Company", companySchema);
