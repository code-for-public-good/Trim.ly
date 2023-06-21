import { TextField, IconButton, Tooltip } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CachedIcon from '@mui/icons-material/Cached';
import React from 'react'
import { urlResProps } from '../../interfaces';

export default function Urlres(props: urlResProps) {

    const { shortcut, setShortcut } = props

    const copyShortcutLink = async () => {
        try {
            await navigator.clipboard.writeText(`${window.location.origin}/${shortcut}`);
            console.log('Content copied to clipboard');
            console.log(shortcut);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    const openInNewTab = () => {
        window.open(`${window.location.origin}/${shortcut}`)
    }

    const clearShortcut = () => {
        setShortcut("")
    }

    return (
        <TextField
            sx={{
                mt: 2,
                mb: 1,
                width: '600px',
                backgroundColor: '#ebecf5',
                "& fieldset": { border: 'none' },
                borderRadius: '10px'
            }}
            value={`${window.location.origin}/${shortcut}`}
            size='small'
            inputProps={{
                style: {
                    height: '40px'
                },
            }}
            InputProps={{
                endAdornment: (
                    <>
                        <Tooltip title="Generate another Link" arrow>
                            <IconButton
                                sx={{
                                    backgroundColor: '#8191c9',
                                    ":hover": { backgroundColor: '#65689e' },
                                    color: 'white'
                                }}
                                onClick={clearShortcut}
                            >
                                <CachedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Copy To Clipboard" arrow>
                            <IconButton
                                sx={{
                                    backgroundColor: '#8191c9',
                                    ":hover": { backgroundColor: '#65689e' },
                                    ml: 1,
                                    color: 'white'
                                }}
                                onClick={copyShortcutLink}
                            >
                                <ContentCopyIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Open In new Tab" arrow>
                            <IconButton
                                sx={{
                                    backgroundColor: '#8191c9',
                                    ":hover": { backgroundColor: '#65689e' },
                                    ml: 1,
                                    color: 'white'
                                }}
                                onClick={openInNewTab}
                            >
                                <CallMadeIcon />
                            </IconButton>
                        </Tooltip>
                    </>
                )
            }}
        />
    )
}
