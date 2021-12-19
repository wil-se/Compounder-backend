import { Document } from "mongoose";

export interface ICompounder extends Document {
    poolId: string;
    poolNumber: number;
    logoUrl: string;
    name: string;
    tick: number; // MOVE TO GLOBAL CONFIG
    gasBoost: number;
    depositSpeedup: number;
    emergencySpeedup: number;
    harvestSpeedup: number;
    swapSpeedup: number;
    approveSpeedup: number
    deltaSeconds: number;
    theshold: number;
    slippage: number;
    stdGas: number;
}