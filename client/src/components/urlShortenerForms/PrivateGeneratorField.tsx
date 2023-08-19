import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { privateGeneratorFieldProps } from '../../interfaces'

export default function PrivateGeneratorField(props: privateGeneratorFieldProps) {
    const { placeholder, icon, isDisabled, value, onChange, type } = props
    
    return (
        <TextField
            fullWidth
            placeholder={placeholder}
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        {icon}
                    </InputAdornment>
                )
            }}
            disabled={isDisabled}
            value={value}
            onChange={onChange}
            type={type}
        />
    )
}
