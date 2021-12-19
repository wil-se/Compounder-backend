import { Document } from "mongoose";

export interface IPool extends Document {
    name: string;
    farmId: string;
    rewardTokenId: string;
    stakeTokenId: string;
    exitTokenId: string;
    id: number;
    logoUrl: string;
}
