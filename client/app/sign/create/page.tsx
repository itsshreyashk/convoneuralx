'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Props from './props'
import showError from '../errorpop';
const Page = () => {
    const router = useRouter();
    const [passView, setPassView] = useState('password');
    const [error_message, set_error_message] = useState('Unknown.');
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const handleGoBack = () => {
        router.back();
    };
    const handleSignUp = async () => {
        if (usernameRef && usernameRef.current && passwordRef && passwordRef.current && ageRef && ageRef.current && emailRef && emailRef.current) {
            const route = (await (await fetch('http://localhost:3000/api/getRoutes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    getRoute: "create"
                })
            })).json()).route;
            const given_username: string = usernameRef.current.value;
            const given_password: string = passwordRef.current.value;
            const given_age: number = parseInt(ageRef.current.value);
            const given_email: string = emailRef.current.value;
            if ((given_username && given_password && given_age && given_email) !== (null || '' || NaN)) {
                const Response: any = (await (await fetch(route, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: given_username,
                        password: given_password,
                        age: given_age,
                        email: given_email,
                    }),
                })).json());




                if (Response.status === 200) {
                    const ssid = Response.ssid; //Session ID.
                    localStorage.setItem('ssid', ssid);
                } else {
                    console.log("Failure.");
                    showError(Response.message.toString(), set_error_message, 3000);
                }
            } else {
                alert(`Check the fields you've entered.`)
            }
        }
    }
    async function checkUp() {
        return ((await (await fetch('http://localhost:3001/health')).json()).health);
    }
    useEffect(() => {
        const fetchData = async () => {
            console.log(await checkUp());
        };
        fetchData();

        document.title = "Sign Up";

        return () => {
        }
    }, [])
    return (
        <>
            <Props usernameRef={usernameRef} passwordRef={passwordRef} handleSignUp={handleSignUp} passView={passView} setPassView={setPassView} ageRef={ageRef} emailRef={emailRef} />
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

export default Page