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
    res.status(200).json({
        message: "Authenitcation failure"
    })
})

router.delete('/logout', userService.signOut)

module.exports = router
