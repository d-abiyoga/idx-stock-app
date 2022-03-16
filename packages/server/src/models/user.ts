import { Schema, model } from 'mongoose';

const PortofolioSchema = new Schema({
  _id: Schema.Types.ObjectId,
  ticker: { type: String },
  quantity: { type: Number },
  averagePrice: { type: Number },
  securityAccount: { type: String },
  lastUpdated: { type: Date, default: Date.now },
});

const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  portofolio: [PortofolioSchema],
  watchlist: {},
  transactionHistory: { type: Array },
});

export const User = model('User', UserSchema);
