import { Paper, Button, TextField } from '@mui/material'
import React from 'react'

export default function PublicShortener() {
    return (
        <Paper elevation={0} sx={{backgroundColor: '#fafaff'}}>
            <TextField
                size='small'
                sx={{
                    my:2, 
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
                        <Button variant='contained' sx={{ backgroundColor: '#8191c9', ":hover": { backgroundColor: '#65689e' } }}>
                            Shorten
                        </Button>
                    )
                }}
            
            />
            
        </Paper>
        
    )
}