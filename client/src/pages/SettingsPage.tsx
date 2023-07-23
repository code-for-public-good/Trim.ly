import { Box, Typography, Stack } from '@mui/material'
import React from 'react'
import SettingsPassword from '../components/settings/Settings.password'
import SettingsAccount from '../components/settings/Settings.account'
import SettingsDeleteAcc from '../components/settings/Settings.deleteAcc'

export default function SettingsPage() {
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
                    <SettingsAccount />
                    <SettingsPassword />
                    <SettingsDeleteAcc />
                </Stack>
            </Box>
        </Box>
    )
}
