import { Button, Card, CardContent, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import React, { useState } from 'react'
import { settingsAccountProps } from '../../interfaces'
import { modifyUserInfo } from '../../adaptors/userAdaptor';

export default function SettingsPassword(props: settingsAccountProps) {

    const { setSnackBarMessage, openSnackBar } = props

    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleChangePasswordButton = () => {
        if (password.length < 8) {
            setPasswordError("Password is less than 8 characters")
            return
        }

        modifyUserInfo("password", password).then(res => {
            setSnackBarMessage(res.message)
            openSnackBar()
        })
    }

    return (
        <Card sx={{ boxShadow: "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px" }}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <Typography variant='h6' textAlign={'left'} fontWeight={'bold'}>
                            Change Password
                        </Typography>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Stack flexDirection={'row'} alignItems={'center'}>
                            <TextField
                                fullWidth
                                size='medium'
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                onChange={(e) => { setPassword(e.target.value); setPasswordError("") }}
                                error={passwordError.length > 0}
                                helperText={passwordError}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={() => {showPassword ? setShowPassword(false) : setShowPassword(true)}}>
                                            {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                        </IconButton>
                                    )
                                }}
                            />
                            <Button sx={{ ml: 3, textTransform: "none" }} onClick={handleChangePasswordButton}>Save</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
