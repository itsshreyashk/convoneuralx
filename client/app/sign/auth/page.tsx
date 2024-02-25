'use client'

import React, { useEffect, useRef } from 'react'

import Props from './props'
const Page = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        document.title = "Sign In";

        if (usernameRef && usernameRef.current) {
            usernameRef.current.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    alert("Working...")
                }
            })
        }
        return () => {
        }
    }, [])

    return (
        <>
            <Props usernameRef={usernameRef} />
        </>
    )
}

export default Page