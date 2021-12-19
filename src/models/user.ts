import { IUser } from "../types/user";
import { model, Schema } from "mongoose";

const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
      unique: true,
    },
    nonce: {
      type: Number,
      required: true,
      default: () => Math.floor(Math.random() * 1000000),
    },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);
