import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarPrivate from '../privateNavbar/Navbar.private'
import { Box } from '@mui/material'

export default function WithPrivateNavBarLayout() {
	return (
		<>
			<NavbarPrivate></NavbarPrivate>
			<Box ml={'240px'} height={"100vh"} px={5} sx={{backgroundColor: "#fff"}}>
				<Outlet />
			</Box>
		</>
	)
}

