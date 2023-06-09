import mongoose from 'mongoose'
import { IShortcut } from '../interfaces/shortcut.interface'

const shortcutSchema = new mongoose.Schema<IShortcut>({
    shortcut: {
        type: String
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

shortcutSchema.pre('save', function(next) {
    if (this.shortcut === undefined) {
        this.shortcut = this._id
    }
    next()
})

const Shortcut = mongoose.model<IShortcut>("Shortcuts", shortcutSchema)

export default Shortcut