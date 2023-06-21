import { Card, CardContent, Typography, Box } from '@mui/material'
import React from 'react'
import { descriptiveCardProps } from '../interfaces';

export default function DescriptiveCard(props: descriptiveCardProps) {
    return (
        <Box sx={{ minWidth: 200, maxWidth: 300 }}>
            <Card variant='elevation' elevation={0}>
                <CardContent>
                    {props.icon}
                    <Typography fontSize={'1rem'} fontWeight={700} color={'#433f8f'} mb={1}>
                        {props.title}
                    </Typography>
                    <Typography fontSize={'0.85rem'}>
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}