import { INetwork } from "../types/network";
import { model, Schema } from "mongoose";

const networkSchema: Schema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    wss: {
      type: [],
      required: true,
    },
    rpc: {
        type: [],
        required: true,
    },
    logoUrl: {
        type: String,
        default: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/svg/color/generic.svg",
    }
  },
  { timestamps: true }
);

export default model<INetwork>("Network", networkSchema);
