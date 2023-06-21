import express, { Express } from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cors from 'cors'

import passport from './src/configs/passportlocal.config';
dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || "3000"

// Connection to MongoDB
const DB_URL = process.env.DB_URL
mongoose.connect(`${DB_URL}`).then(() => {
    console.log(`Connection established with DB!`)
}).catch(err => {
    console.log(`Error connecting to DB: ${err}`)
})

// Cors Configuration
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))

// Allowing req.body to show data
app.use(express.json())

// Initialise Express session
app.use(session({
    secret: process.env.SESSION_SECRET || "GAaXpDwOekIU8ApS",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.DB_URL,
        ttl: 24*60*60,
        autoRemove: 'native'
    }),
    cookie: {
        httpOnly: false,
        maxAge: 1000*24*60*60
    }
}))

// Initialise Passport.js
app.use(passport.initialize())
app.use(passport.session())

// Initalising Routes
app.use("/api/shortcuts", require('./src/controllers/shortcut.controller'))
app.use("/api/users", require("./src/controllers/user.controller"))

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}).on("error", err => {
    console.log(`Server is not running. ${err}`)
})