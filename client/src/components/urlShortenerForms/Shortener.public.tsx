import { Paper, Button, TextField, Typography, IconButton } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React, { useState } from 'react'
import { postShortcut } from '../../adaptors/shortcutAdaptor'

export default function PublicShortener() {

    const [originalLink, setOriginalLink] = useState("")
    const [shortcut, setShortcut] = useState("")
    const [err, setErr] = useState("")

    const isValidUrl = (urlString: string) => {
        try {
            return Boolean(new URL(urlString));
        }
        catch (e) {
            return false;
        }
    }

    const copyShortcutLink = async () => {
        try {
            await navigator.clipboard.writeText(`${window.location.origin}/${shortcut}`);
            console.log('Content copied to clipboard');
            console.log(shortcut);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }


    const onShorten = () => {
        if (originalLink === "") {
            setErr('URL cannot be blank')
            return
        } else if (!isValidUrl(originalLink)) {
            setErr('Invalid URL')
            return
        }
        postShortcut(originalLink).then(res => {
            console.log(res.data)
            setShortcut(res.data.shortcut)
        })
    }

    const onURLTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOriginalLink(event.target.value)
        setErr("")
        setShortcut("")
    }

    return (
        <Paper elevation={0} sx={{ backgroundColor: '#fafaff' }}>
            <TextField
                id='originalurl'
                type='url'
                size='small'
                sx={{
                    mt: 2,
                    mb: 1,
                    width: '600px',
                    backgroundColor: '#ebecf5',
                    "& fieldset": { border: 'none' },
                    borderRadius: '10px'
                }}
                placeholder='Link to shorten'
                inputProps={{
                    style: {
                        height: '40px'
                    },

                }}
                InputProps={{
                    endAdornment: (
                        <Button onClick={onShorten} variant='contained' sx={{ backgroundColor: '#8191c9', ":hover": { backgroundColor: '#65689e' }, ml: 2 }}>
                            Shorten
                        </Button>
                    )
                }}
                onChange={onURLTextFieldChange}
            />
            <TextField
                sx={{
                    display: shortcut.length === 0 || err.length > 0 ? 'none' : 'default',
                    width: '500px',
                    backgroundColor: '#ebecf5',
                    "& fieldset": { border: 'none' },
                    borderRadius: '10px'
                }}
                value={`${window.location.origin}/${shortcut}`}
                size='small'
                inputProps={{
                    style: {
                        height: '40px'
                    },
                }}
                InputProps={{
                    endAdornment: (
                        <IconButton 
                            sx={{
                                backgroundColor: '#8191c9', 
                                ":hover": { backgroundColor: '#65689e' }, 
                                ml: 2, 
                                color: 'white'
                            }}
                            onClick={copyShortcutLink}
                        >
                            <ContentCopyIcon />
                        </IconButton>

                    )
                }}
            />
            <Typography color={'red'} m={0} fontSize={'0.85rem'}>{err}</Typography>
        </Paper>
    )
}