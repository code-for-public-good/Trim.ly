import { TextField, Typography } from '@mui/material'
import React from 'react'
import { authTextFieldProps } from '../interfaces'

export default function AuthTextField(props: authTextFieldProps) {
    
    const { textFieldLabel, textFieldPlaceholder, textFieldType, setField } = props
    
    return (
        <>
            <Typography fontWeight={'bold'} fontSize={'0.95rem'} mt={2}>{textFieldLabel}</Typography>
            <TextField
                fullWidth
                size='small'
                type={textFieldType}
                variant='outlined'
                margin='dense'
                placeholder={textFieldPlaceholder}
                onChange={e => setField(e.target.value)}
            />
        </>
    )
}
