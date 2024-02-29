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
            const Xusername: string = usernameRef.current.value;
            const Xpassword: string = passwordRef.current.value;
            const Xage: number = parseInt(ageRef.current.value);
            const Xemail: string = emailRef.current.value;
            if ((Xusername && Xpassword && Xage && Xemail) !== (null || '' || NaN)) {
                const Request: any = (await (await fetch(route, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: Xusername,
                        password: Xpassword,
                        age: Xage,
                        email: Xemail,
                    }),
                })).json()); //check if ok or not.

                if (Request.status !== 200) {
                    alert(Request.message);
                } else {
                    console.log(Request.session); //logging the session key
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
        </>
    )
}

export default Page