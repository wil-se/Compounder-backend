import { Document } from "mongoose";

export interface IUser extends Document {
    nonce: number;
    address: string;
    username: string;
}