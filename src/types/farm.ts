import { Document } from "mongoose";

export interface IFarm extends Document {
    name: string;
    routerId: string;
    pendingFName: string;
    hasReferral: boolean;
    masterchefAddress: string;
    masterchefAbi: string;
    logoUrl: string;
}
