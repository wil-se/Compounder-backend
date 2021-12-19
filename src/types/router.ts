import { Document } from "mongoose";

export interface IRouter extends Document {
    address: string;
    abi: string;
    networkId: string;
    name: string;
    logoUrl: string;
}
