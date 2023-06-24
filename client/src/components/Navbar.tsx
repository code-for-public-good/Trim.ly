import {
    AppBar, 
    Box, 
    Toolbar, 
    Button, 
    Container, 
    Stack, 
    Link 
} from '@mui/material'
import { useLocation } from "react-router-dom"
import React, { useState } from 'react'
import SignupForm from './SignupForm'

const navBarDotTransparent = {
    'display': 'inline-block',
    'content': '""',
    'borderRadius': '50%',
    'position': 'relative',
    'width': '6px',
    'height': '6px',
    'left': '-6px',
    'bottom': '2px',
    'backgroundColor': 'white'
}

const navBarDotColored = {
    'display': 'inline-block',
    'content': '""',
    'borderRadius': '50%',
    'position': 'relative',
    'width': '6px',
    'height': '6px',
    'left': '-6px',
    'bottom': '2px',
    'backgroundColor': '#8191c9'
}

export default function Navbar() {

    const [signupModalOpen, setSignupModalOpen] = useState(false)
    
    const location = useLocation();

    const signupOnClick = () => {
        setSignupModalOpen(true)
    }

    const signupOnClose = () => {
        setSignupModalOpen(false)
    }
    
    return (
        <AppBar
            elevation={0}
            sx={{ height: '100px', backgroundColor:'white' }}
            position='static'
        >
            <Toolbar sx={{ height: '100%' }}>
                <Container sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, height: '100%' }}>
                    <Box display={'flex'} alignItems={'center'} mb={0.5}>
                        <Link href='/' underline='none' sx={{ 'color': 'black', 'fontSize': '24px', }}>
                            TRIM.LY
                        </Link>
                    </Box>
                    <Stack
                        direction={'row'}
                        component={'nav'}
                        spacing={5}
                        ml={5}
                        mb={1}
                        alignItems={'center'}
                    >
                        <Link
                            href='/app'
                            underline='none'
                            sx={{
                                'color': 'black',
                                'fontSize': '1rem',
                                '::before': location.pathname === '/' ? navBarDotColored : navBarDotTransparent,
                                ':hover': {
                                    '::before': navBarDotColored
                                }
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            href='/app/features'
                            underline='none'
                            sx={{
                                'color': 'black',
                                'fontSize': '1rem',
                                '::before': location.pathname === '/features' ? navBarDotColored : navBarDotTransparent,
                                ':hover': {
                                    '::before': navBarDotColored
                                }
                            }}
                        >
                            Features
                        </Link>
                        <Link
                            href='/app/about'
                            underline='none'
                            marginLeft={10}
                            sx={{
                                'color': 'black',
                                'fontSize': '1rem',
                                '::before': location.pathname === '/about' ? navBarDotColored : navBarDotTransparent,
                                ':hover': {
                                    '::before': navBarDotColored
                                }
                            }}
                        >
                            About
                        </Link>
                    </Stack>
                    <Stack
                        direction={'row'}
                        spacing={3}
                        flexGrow={1}
                        justifyContent={'flex-end'}
                        alignItems={'center'}
                    >
                        <Link href='/' underline='none' sx={{ 'color': 'black', 'fontSize': '1rem' }}>
                            Signin
                        </Link>
                        <Button onClick={signupOnClick} variant='contained' size='large' sx={{ backgroundColor: '#8191c9', ":hover": { backgroundColor: '#65689e' } }}>
                            Signup
                        </Button>
                    </Stack>
                </Container>
                <SignupForm 
                    open={signupModalOpen}
                    onClose={signupOnClose}
                />
            </Toolbar>
        </AppBar>
    )
}
