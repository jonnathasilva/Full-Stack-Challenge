import mongoose, { Schema } from "mongoose";

export const User = mongoose.model(
  "User",
  new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  })
);
