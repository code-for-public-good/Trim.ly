import {
	Box, Typography,
} from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import React from 'react'

import PublicShortener from '../components/urlShortenerForms/Shortener.public'
import DescriptiveCard from '../components/DescriptiveCard'

export default function HomePage() {
	return (
		<Box
			display={'flex'}
			height={'calc(100vh - 100px)'}
			justifyContent={'center'}
			alignItems={'center'}
			marginRight={'100px'}
			marginLeft={'100px'}
		>
			<Box>
				<Typography variant='h1' fontSize={'3rem'} fontWeight={700} color={'#433f8f'}>
					Generate Custom Short Links!
				</Typography>
				<Typography variant='body1' fontSize={'1rem'} mt={2}>
					Trim.ly is a url shortener that allows you to create short links
					from those long web addresses.
				</Typography>
				<Typography variant='body1' fontSize={'1rem'} mb={8}>
					Connect with your customers with much greater ease! Get started now!
				</Typography>
				<PublicShortener />
				<Typography variant='h2' fontSize={'2rem'} fontWeight={700} color={'#433f8f'} mt={8}>
					Short Link, Big Impact
				</Typography>
				<Typography variant='body1' fontSize={'1rem'} mt={2} mb={8}>
					Use this intuitive URL shortening service to customise your links and share them with ease.
				</Typography>
				<Box mt={5} display={'flex'} justifyContent={'space-between'} gap={5}>
					<DescriptiveCard 
						title={'Free'} 
						description={'Trim.ly is a free of charge service to use with no limits on the number of links that can be created.'} 
						icon={<AcUnitIcon sx={{color: '#433f8f'}}/>}
					/>
					<DescriptiveCard 
						title={'Analyse Clicks'} 
						description={'Check out how your links are performing based on comprehensive statistics.'} 
						icon={<AcUnitIcon sx={{color: '#433f8f'}}/>}
					/>
					<DescriptiveCard 
						title={'History'} 
						description={'Trim.ly keeps a list of your past links so you can reuse them when needed!'} 
						icon={<AcUnitIcon sx={{color: '#433f8f'}}/>}
					/>
				</Box>
			</Box>
		</Box>
	)
}