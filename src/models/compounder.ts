import { ICompounder } from "../types/compounder";
import { model, Schema } from "mongoose";

const compounderSchema: Schema = new Schema(
  {
    poolId: {
        type: Schema.Types.ObjectId,
        ref: 'Pool',
        required: true,
    },
    poolNumber: {
      type: Number,
      required: true,
      default: -1,
    },
    logoUrl: {
        type: String,
        required: true,
        default: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/svg/color/generic.svg",
    },
    name: {
        type: String,
    },
    tick: {
        type: Number,
        required: true,
        default: 300,
    },
    gasBoost: {
        type: Number,
        required: true,
        default: 1,
    },
    depositSpeedup: {
        type: Number,
        required: true,
        default: 1,
    },
    emergencySpeedup: {
        type: Number,
        required: true,
        default: 1,
    },
    harvestSpeedup: {
        type: Number,
        required: true,
        default: 1,
    },
    swapSpeedup: {
        type: Number,
        required: true,
        default: 1,
    },
    approveSpeedup: {
        type: Number,
        required: true,
        default: 1,
    },
    threshold: {
        type: Number,
        required: true,
        default: 1,
    },
    slippage: {
        type: Number,
        required: true,
        default: 1,
    },
    stdGas: {
        type: Number,
        required: true,
        default: 1,
    },
  },
  { timestamps: true }
);

export default model<ICompounder>("Compounder", compounderSchema);
