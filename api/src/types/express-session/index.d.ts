import { SessionData } from "express-session"

declare module "express-session" {
    interface SessionData {
        messages: string[],
        passport: { [key: string]: any }
    }
}