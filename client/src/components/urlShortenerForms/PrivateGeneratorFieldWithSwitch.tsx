import { InputAdornment, Switch, TextField, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { privateGeneratorFieldWithSwitchProps } from '../../interfaces'

export default function PrivateGeneratorFieldWithSwitch(props: privateGeneratorFieldWithSwitchProps) {

    const { placeholder, icon, isDisabled, value, onChange, type, switchTooltip } = props

    const [isFieldDisabled, setIsFieldDisabled] = useState(isDisabled)

    const handleSwitchToggle = () => {
        setIsFieldDisabled(!isFieldDisabled)
    }

    return (
        <TextField
            fullWidth
            placeholder={placeholder}
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        {icon}
                    </InputAdornment>
                ),
                endAdornment: (
                    <Tooltip title={switchTooltip(isFieldDisabled)} placement='bottom'>
                        <div>
                            <Switch onClick={handleSwitchToggle} disabled={false}/>
                        </div>
                    </Tooltip>
                )
            }}
            disabled={isFieldDisabled}
            value={value}
            type={type}
            onChange={onChange}
            sx={{
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                    display: "none",
                },
                "& input[type=number]": {
                    MozAppearance: "textfield",
                },
            }}
        />
    )
}
