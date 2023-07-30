import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

export default function LinkGeneratorPage() {
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
                    Link Generator
                </Typography>
                <Stack spacing={5} alignItems={'flex-start'}>
                    <TextField fullWidth/>
                </Stack>
            </Box>
        </Box>
    )
}
