import mongoose from 'mongoose'
import { IShortcut } from '../interfaces/shortcut.interface'

const shortcutSchema = new mongoose.Schema<IShortcut>({
    shortcut: {
        type: String,
        required: [true, 'Shortcut field missing']
    },

    original: {
        type: String,
        required: [true, "Original Link missing"]
    },

    createdOn: {
        type: Date,
        required: true,
        default: Date.now()
    },
    
    numClicks: {
        type: Number,
        required: true,
        default: 0
    },

    clickLimit: {
        type: Number
    },

    owner: {
        type: String
    },

    password: {
        type: String
    }
})

const Shortcut = mongoose.model<IShortcut>("Shortcuts", shortcutSchema)

export default Shortcut