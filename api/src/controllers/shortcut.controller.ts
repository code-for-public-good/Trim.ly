import { Router } from "express";
import shortcutService from "../services/shortcut.service";

const router = Router()

router.post('/add', shortcutService.addShortcut)
router.post('/verify', shortcutService.verifyShortcutPassword)

router.get('/retrieve/:shortcut', shortcutService.getShortcut)
router.get('/history', shortcutService.getAllOwnerShortcuts)

module.exports = router