import { Box, Button, Drawer, Stack } from '@mui/material'
import HistoryIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import AddLinkIcon from '@mui/icons-material/AddLink';
import React from 'react'
import NavbarItemPrivate from './NavbarItem.private';
import { signOut } from '../../adaptors/userAdaptor';
import { useNavigate } from 'react-router-dom';

export default function NavbarPrivate() {

    const navigate = useNavigate()

    const handleLogOut = () => {
        signOut().then(res => {
            navigate("/app")
            navigate(0)
        })
    }

    return (
        <Drawer
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Stack
                direction={'column'}
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={0.5}
                component={'nav'}
                pl={2}
                pr={2}
                pt={1}
                sx={{ backgroundColor: '#1C2536', color: "white", height: "100%" }}
            >
                <Stack
                    direction={'column'}
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={0.5}
                    component={'ul'}
                    sx={{ listStyle: 'none' }}
                    margin={0}
                    padding={0}
                >
                    <NavbarItemPrivate title='Overview' href='/main' icon={<HomeIcon />} />
                    <NavbarItemPrivate title='My Links' href='/mylinks' icon={<HistoryIcon />} />
                    <NavbarItemPrivate title='Analytics' href='/analytics' icon={<BarChartOutlinedIcon />} />
                </Stack>

                <Stack
                    direction={'column'}
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={0.5}
                    component={'ul'}
                    sx={{ listStyle: 'none' }}
                    margin={0}
                    padding={0}
                >
                    <Box component={'li'} mt={1} mb={0.5} ml={1} textTransform={'uppercase'} fontSize={'0.7rem'} color={"#9DA4AE"} fontWeight={"bold"}>Apps</Box>
                    <NavbarItemPrivate title='Link Generator' href='/newlink' icon={<AddLinkIcon />} />
                </Stack>

                <Stack
                    direction={'column'}
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={0.5}
                    component={'ul'}
                    sx={{ listStyle: 'none' }}
                    margin={0}
                    padding={0}
                >
                    <Box component={'li'} mt={1} mb={0.5} ml={1} textTransform={'uppercase'} fontSize={'0.7rem'} color={"#9DA4AE"} fontWeight={"bold"}>Account</Box>
                    <NavbarItemPrivate title='Settings' href='/settings' icon={<TuneOutlinedIcon />} />
                </Stack>

                <Stack width={'100%'}>
                    <Box mt={1}>
                        <Button variant='contained' fullWidth size='small' onClick={handleLogOut}>Log Out</Button>
                    </Box>
                </Stack>
            </Stack>

        </Drawer>
    )
}
