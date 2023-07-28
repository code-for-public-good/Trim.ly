import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getUserInfo, modifyUserInfo } from '../../adaptors/userAdaptor'
import { settingsAccountProps } from '../../interfaces'

export default function SettingsAccount(props: settingsAccountProps) {

    const { setSnackBarMessage, openSnackBar } = props

    const [nickname, setNickname] = useState("")
    const [email, setEmail] = useState("")

    const [nicknameError, setNicknameError] = useState("")
    const [emailError, setEmailError] = useState("")
    
    useEffect(() => {
        getUserInfo().then(res => {
            const packet = res.data
            setNickname(packet.username)
            setEmail(packet.email)
        })
    }, [])

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleNicknameButtonClick = () => {
        if (nickname.length === 0) {
            setNicknameError("Nickname must contain at least one character")
            return
        }
        modifyUserInfo("nickname", nickname).then(res => {
            setSnackBarMessage(res.message)
            openSnackBar()
        })
    }

    const handleEmailButtonClick = () => {
        if (!isValidEmail(email)) {
            setEmailError("Email is not valid")
            return
        }

        modifyUserInfo("email", email).then(res => {
            if (res.err) {
                setEmailError(res.err)
                return
            }
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
                            Account Details
                        </Typography>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Stack flexDirection={'column'} spacing={4}>
                            <Stack flexDirection={'row'} alignItems={'center'}>
                                <TextField
                                    fullWidth
                                    size='medium'
                                    label="Nickname"
                                    value={nickname}
                                    type='text'
                                    onChange={(e) => { setNickname(e.target.value); setNicknameError("") }}
                                    error={nicknameError.length > 0}
                                    helperText={nicknameError}
                                />
                                <Button sx={{ ml: 3, textTransform: "none" }} onClick={handleNicknameButtonClick}>Save</Button>
                            </Stack>
                            <Stack flexDirection={'row'} alignItems={'center'}>
                                <TextField
                                    fullWidth
                                    size='medium'
                                    label="Email"
                                    value={email}
                                    type='email'
                                    onChange={(e) => { setEmail(e.target.value); setEmailError("") }}
                                    error={emailError.length > 0}
                                    helperText={emailError}
                                />
                                <Button sx={{ ml: 3, textTransform: "none" }} onClick={handleEmailButtonClick}>Save</Button>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
