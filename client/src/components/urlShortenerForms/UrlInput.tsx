import { Button, TextField, Typography } from '@mui/material'
import { postShortcut } from '../../adaptors/shortcutAdaptor'
import React, { useState } from 'react'
import { urlInputProps } from '../../interfaces'

export default function UrlInput(props: urlInputProps) {

    const { setShortcut } = props

    const [originalLink, setOriginalLink] = useState("")
    const [err, setErr] = useState("")

    const isValidUrl = (urlString: string) => {
        try {
            return Boolean(new URL(urlString));
        }
        catch (e) {
            return false;
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
        <>
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
            <Typography color={'red'} m={0} fontSize={'0.85rem'}>{err}</Typography>
        </>
    )
}
