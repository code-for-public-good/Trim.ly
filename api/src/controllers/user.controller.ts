import { Router } from "express";
import passport, { Passport } from 'passport'

import userService from "../services/user.service"

const router = Router()

router.post('/register', userService.register)
router.post('/login', userService.signin)

router.get('/responses/success', (req, res) => {
    res.status(200).json({
        message: "Login Success", 
        expiry: Date.now() + 1000*24*60*60
    })
})
router.get('/responses/failure', (req, res) => {

    const message = req.session.messages?.at(-1)
    if (message?.charAt(0) === "E") {
        res.status(200).json({
            err: {
                email: message
            }
        })
    } else {
        res.status(200).json({
            err: {
                password: message
            }
        })
    }
})

router.delete('/logout', userService.signOut)

router.get("/issignedin", userService.isSignedIn)

module.exports = router
