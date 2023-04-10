import express, { Express } from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';

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

// Allowing req.body to show data
app.use(express.json())

// Initalising Routes
app.use("/api/shortcuts", require('./src/controllers/shortcut.controller'))

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}).on("error", err => {
    console.log(`Server is not running. ${err}`)
})