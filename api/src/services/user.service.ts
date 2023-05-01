import bcrypt from 'bcrypt'
import passport from 'passport'

import User from '../models/user.model'
import { RequestHandler } from 'express'

const register: RequestHandler = (req, res) => {
    const password: string = req.body.password
    const email: string = req.body.email
    const username: string = req.body.username

    User.findOne({ email: email })
        .then(async user => {
            if (user) {
                res.status(200)
                    .json({
                        err: {
                            message: "Email already registered"
                        }
                    })
            } else {
                User.create({
                    username: username,
                    email: email,
                    password: await bcrypt.hash(password, 10)
                }).then(_ => {
                    res.status(201)
                        .json({
                            message: "Congratulations! Your account has been successfully created."
                        })
                })
            }
        })
}

const signin: RequestHandler = (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: '/api/users/responses/success', 
        failureRedirect: '/api/users/responses/failure' 
    })(req, res, next)
}

const signOut: RequestHandler = (req, res) => {
    req.session.destroy(error => {
        if (error) {
            res.status(400)
            .json({
                err: error
            })
        } else {
            res.status(200)
            .json({
                message: "Logout Success"
            })
        }
    })
} 

export default {
    register,
    signin,
    signOut
}