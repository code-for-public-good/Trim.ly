import { Document } from "mongoose";

export interface IShortcut extends Document {
    shortcut: string,
    original: string,
    createdOn: Date,
    numClicks: Number,
    clickLimit: Number,
    owner: String,
    password: String
}