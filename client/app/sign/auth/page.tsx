'use client'

import React, { useEffect, useRef } from 'react'

import Props from './props'
const Page = () => {
    //inputs
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const handleSignIn = () => {
        if (usernameRef && usernameRef.current && passwordRef && passwordRef.current) {
            const username: string = usernameRef.current.value.toString();
            const password: string = passwordRef.current.value.toString();
        }
    };
    useEffect(() => {
        document.title = "Sign In";

        return () => {
        }
    }, [])

    return (
        <>
            <Props usernameRef={usernameRef} passwordRef={passwordRef} handleSignIn={handleSignIn} />
        </>
    )
}

export default Page;