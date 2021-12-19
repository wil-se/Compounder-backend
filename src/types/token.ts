import { Document } from "mongoose";

export interface IToken extends Document {
    address: string;
    abi: string;
    networkId: string;
    name: string;
    logoUrl: string;
}
