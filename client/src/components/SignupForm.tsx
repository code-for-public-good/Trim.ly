import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { signupFormProps } from '../interfaces'
import AuthTextField from './AuthTextField'
import { postUser } from '../adaptors/userAdaptor'

export default function SignupForm(props: signupFormProps) {

    const { open, onClose } = props

    const [nickname, setNickname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signup = () => {
        postUser(nickname, email, password).then(res => {
            console.log(res.data)
        })
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle fontWeight={'bold'} fontSize={'1.6rem'} mb={-1}>Sign up</DialogTitle>
            <DialogContent >
                <DialogContentText>
                    Create an account and gain free access to all the features!
                </DialogContentText>
                <AuthTextField
                    textFieldLabel='Nickname'
                    textFieldPlaceholder='John'
                    textFieldType='text'
                    setField={setNickname}
                />
                <AuthTextField
                    textFieldLabel='Email Address'
                    textFieldPlaceholder='example@email.com'
                    textFieldType='email'
                    setField={setEmail}
                />
                <AuthTextField
                    textFieldLabel='Create a Password'
                    textFieldPlaceholder='At least 8 characters'
                    textFieldType='password'
                    setField={setPassword}
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
                    Already have an account? <Link color={"#433f8f"} sx={{cursor: 'pointer'}}>Log in</Link>
                </Typography>
            </DialogContent>
        </Dialog>
    )
}