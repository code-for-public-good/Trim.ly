import mongoose from 'mongoose'
import { IUser } from '../interfaces/user.interface'

const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: [true, 'Username field missing']
    },

    email: {
        type: String,
        required: [true, 'Email field missing']
    },

    password: {
        type: String,
        required: [true, 'Password field missing']
    },

    createdOn: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

const User = mongoose.model<IUser>("Users", userSchema)

export default User