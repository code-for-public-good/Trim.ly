import {
	Box, Typography,
} from '@mui/material'
import React from 'react'

export default function HomePage() {
	return (
		<Box display={'flex'} height={'calc(100vh - 100px)'}>
			<Box>
				<Typography variant='h1' fontSize={'2rem'} fontWeight={700} color={'#433f8f'}>
					Generate Custom Short Links!
				</Typography>
				<Typography variant='body1' fontSize={'1rem'}>
					Trim.ly is a url shortener that allows you to create short links
					from those long web addresses. It allows you to engage with your customers.
					Get Started now!
				</Typography>
			</Box>
		</Box>
	)
}
