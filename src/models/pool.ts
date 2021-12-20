import { IPool } from "../types/pool";
import { model, Schema } from "mongoose";

const poolSchema: Schema = new Schema(
  {
    name: {
      type: String,
    },
    farmId: {
      type: Schema.Types.ObjectId,
      ref: 'Farm',
      required: true,
    },
    stakeTokenId: {
      type: Schema.Types.ObjectId,
      ref: 'Token',
      required: true,
    },
    rewardTokenId: {
      type: Schema.Types.ObjectId,
      ref: 'Token',
      required: true,
    },
    exitTokenId: {
      type: Schema.Types.ObjectId,
      ref: 'Token',
      required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    logoUrl: {
        type: String,
        default: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/svg/color/generic.svg",
    },
  },
  { timestamps: true }
);

export default model<IPool>("Pool", poolSchema);
