import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

export default function SettingsDeleteAcc() {
    return (
        <Card sx={{ boxShadow: "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px" }}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <Typography variant='h6' textAlign={'left'} fontWeight={'bold'}>
                            Account Deletion
                        </Typography>
                    </Grid>
                    <Grid item md={8} xs={12}>
                            <Stack flexDirection={'column'} textAlign={'left'} spacing={3} alignItems={'flex-start'}>
                                <Typography fontSize={'1.1rem'}>
                                    Delete this account along with all your data. This action cannot be undone.
                                </Typography>
                                <Button variant='outlined' size='large' sx={{textTransform:'none'}} color='error'>Delete Account</Button>
                            </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
