'use client'

import React, { useEffect, useRef } from 'react'

import Props from './props'
const Page = () => {
    //inputs
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    //clickables
    const makeRef = useRef<HTMLButtonElement>(null);
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
            <Props usernameRef={usernameRef} passwordRef={passwordRef} makeRef={makeRef} />
        </>
    )
}

export default Page