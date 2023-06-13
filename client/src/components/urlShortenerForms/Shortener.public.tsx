import { Paper, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { postShortcut } from '../../adaptors/shortcutAdaptor'

export default function PublicShortener() {

    const [originalLink, setOriginalLink] = useState("")
    const [err, setErr] = useState("")

    const isValidUrl = (urlString:string) => {
        try { 
            return Boolean(new URL(urlString)); 
        }
        catch(e){ 
            return false; 
        }
    }

    const onShorten = () => {
        if (originalLink === "") {
            setErr('URL cannot be blank')
        } else if (!isValidUrl(originalLink)) {
            setErr('Invalid URL')
        }
        // postShortcut(originalLink).then(res => {
        //     console.log(res.data)
        // })
        console.log(originalLink)
    }

    const onURLTextFieldChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setOriginalLink(event.target.value)
        setErr("")
    }

    return (
        <Paper elevation={0} sx={{backgroundColor: '#fafaff'}}>
            <TextField
                id='originalurl'
                type='url'
                size='small'
                sx={{
                    mt:2,
                    mb:1,
                    width:'600px', 
                    backgroundColor:'#ebecf5', 
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
                        <Button onClick={onShorten} variant='contained' sx={{ backgroundColor: '#8191c9', ":hover": { backgroundColor: '#65689e' }, ml:2 }}>
                            Shorten
                        </Button>
                    )
                }}
                onChange={onURLTextFieldChange}
            />
            <Typography color={'red'} m={0} fontSize={'0.85rem'}>{err}</Typography>
        </Paper>
    )
}