'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const Settings: React.FC = () => {
    const router = useRouter()
    const [username, set_username] = useState("Unknown");
    const [picURL, setPicURL] = useState("");
    const handleGoBack = () => {
        router.back();
    };
    const [renderArray, setRenderArray] = useState<{ field: string; entry: string }[]>([]);
    useEffect(() => {
        set_username("Shreyash Kumar");
        setPicURL("https://avatars.githubusercontent.com/u/147302693?v=4");
        setRenderArray((prevArray) => ([
            ...prevArray,
            {
                field: "Username",
                entry: username
            }
        ]))
        return () => {
        };
    }, [username]);
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div className="absolute top-4 left-4">
                <span className="text-blue-800 text-lg font-bold cursor-pointer hover:underline hover:text-blue-800 text-sm" onClick={handleGoBack}>{'Back'}</span>
            </div>
            <nav className='top-0 flex w-full border-b bg-gray-100'>
                <div className="w-full"></div>
                <div className="w-full px-4 py-2 flex justify-end">
                    <h1 className="text-gray-800 font-bold py-2 disable_select flex">Convoneuralx <span className="material-symbols-outlined">chevron_right</span><Link href={'/home'}><span className="material-symbols-outlined text-sm text-gray-600">home</span></Link><span className="material-symbols-outlined">chevron_right</span><Link href={'/settings'}><span className="material-symbols-outlined text-sm text-gray-600">settings</span></Link></h1>

                </div>
            </nav>
            <div className="p-1 flex justify-center">
                <img src={picURL} alt="profile_image" className='h-28 rounded-full' />
            </div>
            <div className="flex justify-center p-1">
                <div className="rounded-xl border overflow-hidden max-w-[600px] w-full">
                    {/* Render field */}
                    {
                        renderArray.map((element, index) => (
                            <div className="border bg-gray-200" key={index}>
                                <div className="py-2 px-4 flex space-x-4 active:bg-gray-400 duration-200">
                                    <span className='font-bold text-sm'>{element.field}</span>
                                    <span className='text-sm'>{element.entry}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}

export default Settings