'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import Props from './props'
const Page = () => {
    const router = useRouter()

    const [passView, setPassView] = useState('password');
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const handleSignIn = async () => {
        if (usernameRef && usernameRef.current && passwordRef && passwordRef.current && usernameRef.current.value != (null || '') && passwordRef.current.value != (null || '')) {
            const route = (await (await fetch('http://localhost:3000/api/getRoutes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    getRoute: "auth"
                })
            })).json()).route;
            const Username: string = usernameRef.current.value.toString();
            const Password: string = passwordRef.current.value.toString();

        } else {
            alert('Enter the fields correctly.')
        }
    };
    const handleGoBack = () => {
        router.back();
    };
    useEffect(() => {
        document.title = "Sign In";

        return () => {
        }
    }, [])

    return (
        <>
            <Props usernameRef={usernameRef} passwordRef={passwordRef} handleSignIn={handleSignIn} passView={passView} setPassView={setPassView} />
            <div className="absolute top-4 left-4">
                <span className="text-blue-800 text-lg font-bold cursor-pointer hover:underline hover:text-blue-800 text-sm" onClick={handleGoBack}>{'Back'}</span>
            </div>
        </>
    )
}

export default Page;