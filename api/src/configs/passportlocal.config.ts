import bcrypt from 'bcrypt'
import { Strategy, VerifyFunction } from 'passport-local'
import passport from 'passport'

import User from '../models/user.model'

type UserAttrs = {
    id?: String
}

const authenticateUser: VerifyFunction = (email, password, done) => {
    User.findOne({ email: email }) // Tries to find a user in the DB
    .then(user => {
        if (!user) { // If no user found
            return done(null, false, { message: "Email not registered"})
        }

        bcrypt.compare(password, user.password) // If a user is found, compare password
        .then(res => {
            if (res) { 
                return done(null, user)
            } else {
                return done(null, false, {message: "Password incorrect"})
            }
        })
        .catch(err => {
            return done(err)
        })
        
    })
}

passport.use(new Strategy({usernameField: 'email'}, authenticateUser))

passport.serializeUser((user: UserAttrs, done) => {
    done(null, {id: user.id})
})

passport.deserializeUser((user: UserAttrs, done) => {
    User.findById(user.id)
    .then(user => {
        done(null, user)
    })
})

export default passport