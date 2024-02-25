'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter()
    const handleGoBack = () => {
        router.back();
    };
    useEffect(() => {

        document.title = "Sign Up";
        document.body.style.backgroundImage = 'url("https://www.toptal.com/designers/subtlepatterns/uploads/pipes.png")';

        return () => {
        }
    }, [])
    return (
        <>
            <div className="absolute top-4 left-4">
                <span className="text-blue-800 text-lg font-bold cursor-pointer hover:underline hover:text-blue-800 text-sm" onClick={handleGoBack}>{'Back'}</span>
            </div>
        </>
    )
}

export default Page