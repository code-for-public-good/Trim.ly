import { Button } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom';
import { navbarItemPrivateProps } from '../../interfaces'

export default function NavbarItemPrivate(props: navbarItemPrivateProps) {
    
    const { href, title, icon } = props
    const location = useLocation()

    return (
        <>
            <li style={{ width: '175px' }}>
                <Button
                    href={href}
                    size='small'
                    sx={{
                        textTransform: 'none',
                        color: location.pathname === href ? "white" : "#9DA4AE",
                        backgroundColor: location.pathname === href ? "rgba(255, 255, 255, 0.04)" : "none",
                        ':hover': {
                            backgroundColor: "rgba(255, 255, 255, 0.04)"
                        },
                        justifyContent:'flex-start',
                        pl:2
                    }}
                    fullWidth
                    startIcon={icon}
                >
                    {title}
                </Button>
            </li>
        </>
    )
}
