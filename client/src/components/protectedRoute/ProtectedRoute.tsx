import { Outlet, Navigate } from "react-router-dom";
import { checkSignIn } from "../../adaptors/userAdaptor";
import React, { useEffect, useState } from 'react'
import { protectedRouteProps } from "../../interfaces";

const useAuth = () => {
    const [isSignedIn, SetIsSignedIn] = useState(null)

    useEffect(() => {
        checkSignIn().then(res => {
            SetIsSignedIn(res.data.isSignedIn)
        })
    }, [])

    return isSignedIn
}

export default function ProtectedRoute(props: protectedRouteProps) {

    const { isProtected } = props // Is the route a protected route?

    const isSignedIn = useAuth()

    if (isSignedIn === null)
        return null;

    if (isProtected) {
        return isSignedIn ? <Outlet /> : <Navigate to={"/app"} replace />
    }
    
    return isSignedIn ? <Navigate to={"/main"} replace /> : <Outlet />
}