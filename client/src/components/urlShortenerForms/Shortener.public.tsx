import { Paper } from '@mui/material'
import React, { useState } from 'react'
import Urlres from './Urlres';
import UrlInput from './UrlInput';

export default function PublicShortener() {

    const [shortcut, setShortcut] = useState("")

    return (
        <Paper elevation={0} sx={{ backgroundColor: '#fafaff' }}>
            {
                shortcut.length === 0 ?
                    <UrlInput setShortcut={setShortcut} /> :
                    <Urlres shortcut={shortcut} setShortcut={setShortcut} />
            }

        </Paper>
    )
}