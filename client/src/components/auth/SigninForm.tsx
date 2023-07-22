import { Button, Dialog, DialogContent, DialogTitle, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { signinFormProps } from '../../interfaces'
import AuthTextField from './AuthTextField'
import { postSignIn } from '../../adaptors/userAdaptor'
import { useNavigate } from 'react-router-dom'

export default function SigninForm(props: signinFormProps) {

    const { open, onClose } = props

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate()

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const signin = () => {
        if (!isValidEmail(email)) {
            setEmailError("Email is not valid")
        }

        if (password.length === 0) {
            setPasswordError("Please enter a password")
        }

        if (isValidEmail(email) && password.length > 0) {
            postSignIn(email, password).then(res => {
                if (res.data.err) {
                    if (res.data.err.email) {
                        setEmailError(res.data.err.email)
                    }
    
                    if (res.data.err.password) {
                        setPasswordError(res.data.err.password)
                    }
                    return
                }
                onClose()
                navigate("/main")
                navigate(0)
            })
        }

    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            sx={{
                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: "400px",
                    },
                },
            }}>
            <DialogTitle fontWeight={'bold'} fontSize={'1.6rem'} mb={-1}>
                Sign In
            </DialogTitle>
            <DialogContent>
                <AuthTextField
                    textFieldLabel='Email Address'
                    textFieldPlaceholder=''
                    textFieldType='email'
                    setField={setEmail}
                    error={emailError}
                    setError={setEmailError}
                />

                <AuthTextField
                    textFieldLabel='Password'
                    textFieldPlaceholder=''
                    textFieldType='password'
                    setField={setPassword}
                    error={passwordError}
                    setError={setPasswordError}
                />
                <Link color={"#433f8f"} sx={{ cursor: 'pointer', fontWeight: 'bold', display: 'flex', flexDirection: 'row-reverse' }}>
                    Forgot password?
                </Link>
                <Button
                    variant='contained'
                    fullWidth
                    size='large'
                    sx={{
                        mt: 3,
                        backgroundColor: "#8191c9",
                        ":hover": { backgroundColor: '#65689e' }
                    }}
                    onClick={signin}
                >Sign In</Button>
                <Typography mt={2} textAlign={'center'}>
                    Don't have an account? <Link color={"#433f8f"} sx={{ cursor: 'pointer', fontWeight: 'bold' }}>Sign in</Link>
                </Typography>
            </DialogContent>
        </Dialog>
    )
}
