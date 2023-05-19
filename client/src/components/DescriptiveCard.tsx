import { Card, CardContent, Typography, Box } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import React from 'react'
import { descriptiveCardProps } from '../interfaces';

export default function DescriptiveCard(props: descriptiveCardProps) {
    return (
        <Box sx={{ minWidth: 200 }}>
            <Card variant='outlined'>
                <CardContent>
                    {props.icon}
                    <Typography fontSize={'1rem'} fontWeight={700} color={'#433f8f'} mb={1}>
                        {props.title}
                    </Typography>
                    <Typography fontSize={'0.75rem'}>
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}
