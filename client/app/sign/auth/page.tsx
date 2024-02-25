'use client'

import React, { useEffect, useRef } from 'react'

import Props from './props'
const Page = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const handleSignIn = async () => {
        if (usernameRef && usernameRef.current && passwordRef && passwordRef.current) {
            const Route = (await (await fetch('http://localhost:3000/routes.json')).json()).auth; const username: string = usernameRef.current.value.toString();
            const Username: string = usernameRef.current.value.toString();
            const Password: string = passwordRef.current.value.toString();

        }
    };
    useEffect(() => {
        document.title = "Sign In";
        document.body.style.backgroundImage = 'url("https://www.toptal.com/designers/subtlepatterns/uploads/pipes.png")';

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