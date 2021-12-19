import { IToken } from "../types/token";
import { model, Schema } from "mongoose";

const tokenSchema: Schema = new Schema(
  {
    address: {
      type: String,
      required: true,
      unique: true,
    },
    abi: {
      type: String,
      required: true,
    },
    networkId: {
      type: [],
      required: true,
    },
    name: {
        type: String,
    },
    logoUrl: {
        type: String,
        default: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/svg/color/generic.svg",
    }
  },
  { timestamps: true }
);

export default model<IToken>("Token", tokenSchema);
