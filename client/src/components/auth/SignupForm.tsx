import { Alert, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Link, Snackbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { signupFormProps } from '../../interfaces'
import AuthTextField from './AuthTextField'
import { postUser } from '../../adaptors/userAdaptor'

export default function SignupForm(props: signupFormProps) {

    const { open, onClose } = props

    const [snackbarOpen, setSnackbarOpen] = useState(false)

    const [nickname, setNickname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [nicknameError, setNicknameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const signup = () => {

        if (nickname.length === 0) {
            setNicknameError("Enter a nickname")
        }

        if (!isValidEmail(email)) {
            setEmailError("Email is not valid")
        }

        if (password.length < 8) {
            setPasswordError("Password is less than 8 characters")

        }

        if (nickname.length > 0 && isValidEmail(email) && password.length >= 8) {
            postUser(nickname, email, password).then(res => {
                if (res.data.err) {
                    setEmailError(res.data.err.message)
                    return
                }
                onClose()
                setSnackbarOpen(true)
            })
        }
    }

    return (
        <>
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
                }}
            >
                <DialogTitle fontWeight={'bold'} fontSize={'1.6rem'} mb={-1}>Sign Up</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Create an account and gain free access to all the features!
                    </DialogContentText>
                    <AuthTextField
                        textFieldLabel='Nickname'
                        textFieldPlaceholder='John'
                        textFieldType='text'
                        setField={setNickname}
                        error={nicknameError}
                        setError={setNicknameError}
                    />
                    <AuthTextField
                        textFieldLabel='Email Address'
                        textFieldPlaceholder='example@email.com'
                        textFieldType='email'
                        setField={setEmail}
                        error={emailError}
                        setError={setEmailError}
                    />
                    <AuthTextField
                        textFieldLabel='Create a Password'
                        textFieldPlaceholder='At least 8 characters'
                        textFieldType='password'
                        setField={setPassword}
                        error={passwordError}
                        setError={setPasswordError}
                    />
                    <Button
                        variant='contained'
                        fullWidth
                        size='large'
                        sx={{
                            mt: 3,
                            backgroundColor: "#8191c9",
                            ":hover": { backgroundColor: '#65689e' }
                        }}
                        onClick={signup}
                    >Sign up</Button>
                    <Typography mt={2} textAlign={'center'}>
                        Already have an account? <Link color={"#433f8f"} sx={{ cursor: 'pointer', fontWeight: 'bold' }}>Log in</Link>
                    </Typography>
                </DialogContent>
            </Dialog>
            <Snackbar autoHideDuration={3000} open={snackbarOpen} onClose={() => setSnackbarOpen(false)}>
                <Alert onClose={() => setSnackbarOpen(false)} severity='success' sx={{ width: '100%' }}>
                    Account Successfully created!
                </Alert>
            </Snackbar>
        </>
    )
}