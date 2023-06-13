import { Response, Request } from 'express'
import bcrypt from 'bcrypt'

import Shortcut from "../models/shortcut.model"

// Tech Debt: After auth set up, ensure ownerID is not exposed to client
const addShortcut = async (req:Request, res:Response) => {
    const shortcut = req.body.shortcut
    const original = req.body.original
    const password = req.body.password
    const limitOfClicks = req.body.limit

    const ownerId = "abc123"

    const shortcutPresent = shortcut === undefined ? false : await Shortcut.findOne({shortcut: shortcut})

    if (shortcutPresent) {
        res.status(400).json({
            err: "Duplicated shortcut present"
        })
    } else {
        Shortcut.create({
            shortcut: shortcut,
            original: original,
            password: password === undefined ? undefined : await bcrypt.hash(password, 10),
            clickLimit: limitOfClicks,
            owner: ownerId
        }).then(result => {
            res.status(200).json({
                message: "success",
                shortcut: result.shortcut
            })
        }).catch(error => {
            res.status(400).json({
                err: error.message
            })
        })
    }
}

const getShortcut = async (req:Request, res:Response) => {
    const shortcut = req.params.shortcut
    
    const shortcutPresent = await Shortcut.findOne({shortcut: shortcut})
    
    if (shortcutPresent && shortcutPresent.numClicks >= shortcutPresent.clickLimit) {
        return res
        .status(200)
        .json({
            err: "Link expired, create a new one!"
        })
    }

    await shortcutPresent?.updateOne({$inc: {numClicks: 1}})

    if (shortcutPresent && shortcutPresent.password === undefined) {
        res.status(200).json({
            redirect: shortcutPresent.original
        })
    } else if (shortcutPresent && shortcutPresent.password) {
        res.status(200).json({
            redirect: `/verify/${shortcut}`,
        })
    }
    else {
        res.status(404).json({
            redirect: "/error"
        })
    }
}

const verifyShortcutPassword = async (req:Request, res:Response) => {
    const shortcut = req.body.shortcut
    const password = req.body.password

    const shortcutPresent = await Shortcut.findOne({shortcut: shortcut})
    const hashedPassword = shortcutPresent?.password === undefined ? "" : shortcutPresent?.password.toString()

    if (shortcutPresent && shortcutPresent.numClicks >= shortcutPresent.clickLimit) {
        return res
        .status(200)
        .json({
            err: "Link expired, create a new one!"
        })
    }

    if (await bcrypt.compare(password, hashedPassword)) {
        await shortcutPresent?.updateOne({$inc: {numClicks: 1}})
        res
        .status(200)
        .json({
            redirect: shortcutPresent?.original
        })
    } else {
        res
        .status(200)
        .json({
            err: "Incorrect Password"
        })
    }

}

// Tech Debt: When Authentication is set up, ownerId should not be exposed
const getAllOwnerShortcuts = (req:Request, res:Response) => {
    const ownerID = "abc123"

    Shortcut.find({owner: ownerID})
    .select({_id:0, original:1, shortcut:1})
    .then(data => {
        res.status(200).json(data)
    })
}

export default {
    addShortcut,
    getShortcut,
    getAllOwnerShortcuts,
    verifyShortcutPassword
}