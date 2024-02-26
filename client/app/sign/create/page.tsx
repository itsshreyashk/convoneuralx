'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Props from './props'
const Page = () => {
    const router = useRouter();
    const [passView, setPassView] = useState('password');
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const handleGoBack = () => {
        router.back();
    };
    const handleSignUp = () => {

    }
    useEffect(() => {

        document.title = "Sign Up";
        document.body.style.backgroundImage = 'url("https://www.toptal.com/designers/subtlepatterns/uploads/pipes.png")';

        return () => {
        }
    }, [])
    return (
        <>
            <Props usernameRef={usernameRef} passwordRef={passwordRef} handleSignUp={handleSignUp} passView={passView} setPassView={setPassView} ageRef={ageRef} emailRef={emailRef} />
            <div className="absolute top-4 left-4">
                <span className="text-blue-800 text-lg font-bold cursor-pointer hover:underline hover:text-blue-800 text-sm" onClick={handleGoBack}>{'Back'}</span>
            </div>
        </>
    )
}

export default Page