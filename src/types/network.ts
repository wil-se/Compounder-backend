import { Document } from "mongoose";

export interface INetwork extends Document {
    id: number;
    name: string;
    wss: Array<string>;
    rpc: Array<string>;
    logoUrl: string;
}
