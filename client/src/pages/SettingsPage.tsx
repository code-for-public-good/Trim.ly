import { Box, Typography, Stack, Snackbar, Alert } from '@mui/material'
import React, { useState } from 'react'
import SettingsPassword from '../components/settings/Settings.password'
import SettingsAccount from '../components/settings/Settings.account'
import SettingsDeleteAcc from '../components/settings/Settings.deleteAcc'

export default function SettingsPage() {

    const [snackBarOpen, setSnackbarOpen] = useState(false)
    const [snackBarMessage, setSnackBarMessage] = useState("")

    return (
        <Box display={'flex'} flexDirection={'column'} height={"100%"} alignItems={'center'} justifyContent={'center'} sx={{ backgroundColor: "rgb(255 255 255)" }}>
            <Box width={'100%'}>
                <Typography
                    variant={'h4'}
                    textAlign={'left'}
                    width={'100%'}
                    fontWeight={'bold'}
                    mb={5}
                >
                    Settings
                </Typography>
                <Stack spacing={5}>
                    <SettingsAccount setSnackBarMessage={setSnackBarMessage} openSnackBar={() => setSnackbarOpen(true)}/>
                    <SettingsPassword setSnackBarMessage={setSnackBarMessage} openSnackBar={() => setSnackbarOpen(true)}/>
                    <SettingsDeleteAcc />
                </Stack>
            </Box>
            <Snackbar 
                open={snackBarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
            >
                <Alert onClose={() => setSnackbarOpen(false)} severity='success' sx={{ width: '100%' }}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>
        </Box>
    )
}
