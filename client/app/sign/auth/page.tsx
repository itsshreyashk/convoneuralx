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
            const response = await fetch('http://localhost:3000/api/getRoutes');
            console.log(response);
            
            const responseData = await response.json();
            console.log(responseData);

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
        document.body.style.backgroundImage = 'url("https://www.toptal.com/designers/subtlepatterns/uploads/pipes.png")';

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