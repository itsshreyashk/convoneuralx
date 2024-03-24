'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import Props from './props'
const Page = () => {
    const router = useRouter()
    const [passView, setPassView] = useState('password');
    const [error_message, set_error_message] = useState('Unknown message.');

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
            const Response: any = await (await fetch(route, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: Username,
                    password: Password,
                }),
            })).json();
            if (Response.status === 200) {
                //Good to go
                localStorage.setItem("ssid", Response.key);
                location.href = '/home';
            } else {
                //Display error.
                console.log(`Error. ${Response.message}`);
                
            }

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
            <div className="fixed top-4 right-[40px] border rounded-xl px-4 py-2 bg-red-600 shadow-xl opacity-90 Error_Popup_Container hidden">
                <div className="w-full text-end">
                    <span className='font-bold text-white text-sm'>Error</span>
                </div>
                <span className='text-sm text-white'>{error_message}</span>
            </div>
        </>
    )
}

export default Page;