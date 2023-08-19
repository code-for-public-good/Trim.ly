import { Box, Button, Stack, Typography } from '@mui/material'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import AddLinkSharpIcon from '@mui/icons-material/AddLinkSharp';
import React, { useState } from 'react'
import PrivateGeneratorField from '../components/urlShortenerForms/PrivateGeneratorField';
import PrivateGeneratorFieldWithSwitch from '../components/urlShortenerForms/PrivateGeneratorFieldWithSwitch';

export default function LinkGeneratorPage() {

    const [originalLink, setOriginalLink] = useState("")
    const [uniqueIdentifier, setUniqueIdentifier] = useState("")
    const [description, setDescription] = useState("")
    const [passcode, setPasscode] = useState("")
    const [clickLimit, setClickLimit] = useState("")

    return (
        <Box display={'flex'} flexDirection={'column'} height={"100%"} alignItems={'center'} justifyContent={'center'} sx={{ backgroundColor: "rgb(255 255 255)" }} width={'100%'}>
            <Box width={'100%'}>
                <Typography
                    variant={'h4'}
                    textAlign={'left'}
                    width={'100%'}
                    fontWeight={'bold'}
                    mb={5}
                >
                    Link Generator
                </Typography>
                <Stack spacing={5} alignItems={'flex-start'} width={'100%'}>
                    <PrivateGeneratorField 
                        placeholder='Paste Original Link' 
                        icon={<LanguageOutlinedIcon />}
                        isDisabled={false}
                        value={originalLink}
                        onChange={(e) => setOriginalLink(e.target.value)}
                        type='text'
                    />
                    <Stack direction={'row'} width={'100%'} spacing={2}>
                        <PrivateGeneratorField 
                            placeholder='' 
                            icon={<AddLinkSharpIcon />}
                            isDisabled={true}
                            value={window.location.origin}
                            onChange={(e) => ""}
                            type='text'
                        />
                        <Typography fontSize={'2.5rem'}>/</Typography>
                        <PrivateGeneratorField 
                            placeholder='Unique Identifier' 
                            icon={<></>}
                            isDisabled={false}
                            value={uniqueIdentifier}
                            onChange={(e) => setUniqueIdentifier(e.target.value)}
                            type='text'
                        />
                    </Stack>
                    <PrivateGeneratorField
                        placeholder='Description of Link' 
                        icon={<DescriptionIcon />}
                        isDisabled={false}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type='text'
                    />
                    <PrivateGeneratorFieldWithSwitch
                        placeholder='Set Passcode for Link' 
                        icon={<VpnKeyIcon />}
                        isDisabled={false}
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        type='text'
                        switchTooltip={(isDisabled) => isDisabled ? "Require a passcode" : "Passcode not required"}
                    />
                    <PrivateGeneratorFieldWithSwitch
                        placeholder='Click Limit' 
                        icon={<AdsClickIcon />}
                        isDisabled={false}
                        value={clickLimit}
                        onChange={(e) => setClickLimit(e.target.value)}
                        type='number'
                        switchTooltip={(isDisabled) => isDisabled ? "Enter Click Limit" : "Link has unlimited access"}
                    />
                    <Button>Submit</Button>
                </Stack>
            </Box>
        </Box>
    )
}
