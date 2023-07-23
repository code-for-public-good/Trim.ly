import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

export default function SettingsPassword() {
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
                                type='password'
                            />
                            <Button sx={{ ml: 3, textTransform: "none" }}>Save</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
