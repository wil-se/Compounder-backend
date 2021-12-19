import { IFarm } from "../types/farm";
import { model, Schema } from "mongoose";

const farmSchema: Schema = new Schema(
  {
    name: {
        type: String,
        required: true,
    },
    routerId: {
      type: String,
      required: true,
      default: -1,
    },
    pendingFName: {
        type: String,
        required: true,
    },
    hasReferral: {
        type: Boolean,
        required: true,
        default: false,
    },
    masterchefAddress: {
        type: String,
        required: true,
    },
    masterchefAbi: {
        type: String,
        required: true,
    },
    logoUrl: {
        type: String,
        default: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/svg/color/generic.svg",
    },
  },
  { timestamps: true }
);

export default model<IFarm>("Farm", farmSchema);
