import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getShortcut } from '../adaptors/shortcutAdaptor'

export default function RedirectPage() {

    const { shortcut } = useParams<{ shortcut: string }>()

    useEffect(() => {
        if (shortcut !== undefined) {
            getShortcut(shortcut)
                .then(res => {
                    if (res.data.type === "success") {
                        window.location.replace(res.data.redirect)
                    }
                })
        }
    }, [shortcut])

    return (
        <>
        </>
    )
}
