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
        failureRedirect: '/api/users/responses/failure',
        failureMessage: true
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

const isSignedIn: RequestHandler = (req, res) => {
    res.status(200).json({
        isSignedIn: req.isAuthenticated()
    })
}

const userInfo: RequestHandler = (req, res) => {
    const id = req.session.passport?.user.id
    
    User.findById(id)
    .then(user => {
        if (user) {
            res.status(200).json({
                username: user.username,
                email: user.email
            })
        } else {
            res.status(404).json({
                err: "Resource not found"
            })
        }
    })
}

const modifyUserInfo: RequestHandler = async (req, res) => {
    const id = req.session.passport?.user.id

    const field = req.body.field
    const update = req.body.update

    if (field === "email") {
        const userPresent = await User.findOne({ email: update })
        if (userPresent) {
            res.status(400).json({
                err: "Email is used by another user"
            })
        } else {
            User.findByIdAndUpdate(id, {"email": update}).then(_ => {
                res.status(200).json({
                    message: "Email update successful"
                })
            })
        }
    } else if (field === "password") {
        User.findByIdAndUpdate(id, {field: await bcrypt.hash(update, 10)}).then(_ => {
            res.status(200).json({
                message: "Password update successful"
            })
        })
    } else if (field === "nickname") {
        User.findByIdAndUpdate(id, {"username": update}).then(_ => {
            res.status(200).json({
                message: "Nickname update successful"
            })
        })
    }
}

export default {
    register,
    signin,
    signOut,
    isSignedIn,
    userInfo,
    modifyUserInfo
}