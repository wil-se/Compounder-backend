import { Document } from "mongoose";

export interface IFarm extends Document {
    name: string;
    routerId: string;
    pid: number;
    pendingFName: string;
    hasReferral: boolean;
    masterChefAddress: string;
    masterchefAbi: string;
    stakeTokenID: string;
    rewardTokenID: string;
    logoUrl: string;
}
