import { Outlet, Navigate } from "react-router-dom";
import { checkSignIn } from "../../adaptors/userAdaptor";
import React, { useEffect, useState } from 'react'

const useAuth = () => {
    const [isSignedIn, SetIsSignedIn] = useState(null)

    useEffect(() => {
        checkSignIn().then(res => {
            SetIsSignedIn(res.data.isSignedIn)
        })
    }, [])

    return isSignedIn
}

export default function ProtectedRoute() {

    const isSignedIn = useAuth()

    if (isSignedIn === null)
        return null;

    return isSignedIn ? <Outlet /> : <Navigate to={"/app"} replace />
}