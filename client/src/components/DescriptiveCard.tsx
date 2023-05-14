import { Card, CardContent, Typography, Box } from '@mui/material'
import React from 'react'

export default function DescriptiveCard() {
    return (
        <Box sx={{ maxWidth: 300 }}>
            <Card variant='outlined'>
                <CardContent>
                    <Typography fontSize={'1rem'} fontWeight={700} color={'#433f8f'} mb={3}>
                        Main descriptor
                    </Typography>
                    <Typography>
                        Subtitle
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}
